<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

$json = file_get_contents('php://input');
$data = json_decode($json);

$servername = "qualivita_db.vpscronos0205.mysql.dbaas.com.br";
$username = "qualivita_db";
$password = "QualiVitaTCCEtec2024#";
$dbname = "qualivita_db";

$response = [];
// Cria a conexão com o banco de dados
$conn = new mysqli($servername, $username, $password, $dbname);
mysqli_set_charset($conn,"utf8");

// Verifica a conexão
if ($conn->connect_error) {
    $response[] = ['msg' => "Erro: ".$conn->connect_error];
} else {
    // Prepara a consulta para buscar o usuário pelo email
    $stmt = $conn->prepare("SELECT nome, senha FROM usuarios WHERE email = ?");
    $stmt->bind_param("s", $data->email);
    $stmt->execute();
    $stmt->store_result();

    if ($stmt->num_rows > 0) {
        $stmt->bind_result($nome, $senhaHash);
        $stmt->fetch();
        
        // Verifica a senha
        if (password_verify($data->senha, $senhaHash)) {
            $response[] = ['msg' => "Login realizado com sucesso", 'nome' => $nome];
        } else {
            $response[] = ['msg' => "Senha incorreta"];
        }
    } else {
        $response[] = ['msg' => "Usuário não encontrado"];
    }
    
    $stmt->close();
}

// Fecha a conexão com o banco de dados
$conn->close();
echo json_encode(['informações' => $response]);
?>
