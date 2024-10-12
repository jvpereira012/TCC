<?php
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
    if (isset($data['email'], $data['senha'])) {
        $email = $data['email'];
        $senha = $data['senha'];

        // Consulta para buscar o usuário pelo e-mail
        $sql = "SELECT * FROM usuarios WHERE email = ?";
        $stmt = $conn->prepare($sql);
        $stmt->bind_param("s", $email);
        $stmt->execute();
        $result = $stmt->get_result();

        // Verifica se o usuário existe
        if ($result->num_rows > 0) {
            $user = $result->fetch_assoc();
            
            // Verifica se a senha está correta
            if (password_verify($senha, $user['senha'])) {
                // Login bem-sucedido
                echo json_encode(array("success" => true, "message" => "Login realizado com sucesso!", "user" => $user));
            } else {
                // Senha incorreta
                echo json_encode(array("success" => false, "message" => "Senha incorreta."));
            }
        } else {
            // E-mail não encontrado
            echo json_encode(array("success" => false, "message" => "Usuário não encontrado."));
        }

        $stmt->close();
    } else {
        // Dados incompletos
        echo json_encode(array("success" => false, "message" => "Dados incompletos."));
    }

    // Fecha a conexão com o banco de dados
    $conn->close();
?>
