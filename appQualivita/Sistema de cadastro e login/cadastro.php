<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Configurações do banco de dados
$servername = "qualivita_db.vpscronos0205.mysql.dbaas.com.br";
$username = "qualivita_db";
$password = "QualiVitaTCCEtec2024#";
$dbname = "qualivita_db";

// Cria a conexão com o banco de dados
$conn = new mysqli($servername, $username, $password, $dbname);

// Verifica a conexão
if ($conn->connect_error) {
    die(json_encode(array("success" => false, "message" => "Falha na conexão com o banco de dados.")));
}

// Recebe dados JSON enviados pelo app React Native
$data = json_decode(file_get_contents("php://input"), true);

// Verifica se os campos obrigatórios estão preenchidos
if (isset($data['nome'], $data['email'], $data['senha'], $data['datanasc'])) {
    $nome = $conn->real_escape_string(trim($data['nome']));
    $email = $conn->real_escape_string(trim($data['email']));
    $senha = password_hash($data['senha'], PASSWORD_DEFAULT); // Hash da senha
    $datanasc = $conn->real_escape_string(trim($data['datanasc']));

    // Verifica se o e-mail já existe no banco de dados
    $sql_check = "SELECT id FROM usuarios WHERE email = ?";
    $stmt_check = $conn->prepare($sql_check);
    
    if ($stmt_check === false) {
        die(json_encode(array("success" => false, "message" => "Erro na preparação da consulta.")));
    }
    
    $stmt_check->bind_param("s", $email);
    $stmt_check->execute();
    $result_check = $stmt_check->get_result();

    if ($result_check->num_rows > 0) {
        // E-mail já está registrado
        echo json_encode(array("success" => false, "message" => "Este email já está registrado."));
    } else {
        // Insere os dados do novo usuário
        $sql = "INSERT INTO usuarios (nome, email, senha, datanasc) VALUES (?, ?, ?, ?)";
        $stmt = $conn->prepare($sql);
        
        if ($stmt === false) {
            die(json_encode(array("success" => false, "message" => "Erro na preparação da consulta.")));
        }

        $stmt->bind_param("ssss", $nome, $email, $senha, $datanasc);

        if ($stmt->execute()) {
            // Cadastro realizado com sucesso
            echo json_encode(array("success" => true, "message" => "Usuário cadastrado com sucesso!"));
        } else {
            // Falha ao inserir dados
            echo json_encode(array("success" => false, "message" => "Falha ao cadastrar o usuário."));
        }

        $stmt->close();
    }

    $stmt_check->close();
} else {
    // Dados incompletos
    echo json_encode(array("success" => false, "message" => "Dados incompletos."));
}

// Fecha a conexão com o banco de dados
$conn->close();
?>
