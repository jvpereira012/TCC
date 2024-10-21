<?php
header('Content-Type: application/json');

// Configuração da conexão com o banco de dados
$host = 'localhost';
$username = 'root'; // Usuário padrão do MySQL no phpMyAdmin local
$password = ''; // Senha vazia por padrão no MySQL local
$dbname = 'qualivita'; // Nome do seu banco de dados

// Criar a conexão
$conn = new mysqli($host, $username, $password, $dbname);

// Verificar se houve erro na conexão
if ($conn->connect_error) {
    die(json_encode(['status' => 'error', 'message' => 'Falha de conexão: ' . $conn->connect_error]));
}

// Receber os dados do cliente (JSON)
$data = json_decode(file_get_contents("php://input"), true);

// Verificar se os dados foram recebidos corretamente
if (is_null($data)) {
    echo json_encode(['status' => 'error', 'message' => 'Dados inválidos!']);
    exit; // Encerra o script se os dados não forem válidos
}

// Acessar os dados do array
$email = $data['email'] ?? null;
$senha = $data['senha'] ?? null;

// Verificar se todos os campos estão preenchidos
if (is_null($email) || is_null($senha)) {
    echo json_encode(['status' => 'error', 'message' => 'Todos os campos são obrigatórios!']);
    exit; // Encerra o script se algum campo estiver vazio
}

// Preparar a declaração para evitar SQL Injection
$stmt = $conn->prepare("SELECT * FROM usuarios WHERE email = ? AND senha = ?");
$stmt->bind_param("ss", $email, $senha);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows > 0) {
    echo json_encode(['status' => 'success', 'message' => 'Login bem-sucedido!']);
} else {
    echo json_encode(['status' => 'error', 'message' => 'Email ou senha incorretos!']);
}

// Fechar a conexão
$stmt->close();
$conn->close();
?>
