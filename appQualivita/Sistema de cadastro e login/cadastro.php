<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

$json = file_get_contents('//php:input');
$data = json_decode($json);

$servername = "qualivita_db.vpscronos0205.mysql.dbaas.com.br";
$username = "qualivita_db";
$password = "QualiVitaTCCEtec2024#";
$dbname = "qualivita_db";

$response = [];
// Cria a conexão com o banco de dados
$conn = new mysqli($servername, $username, $password, $dbname);
mysqli_set_charset($conn,"utf-8");

// Verifica a conexão
if ($conn->connect_error) {
    $response[] = ['msg' => "Erro: ".$conn->connect_error];
    
}
else{
    $senhaHash=password_hash($data->senha,PASSWORD_DEFAULT);
    $stmt = $conn->prepare("insert into usuarios (nome,email,senha,datanasc) values (?,?,?,?)");
    $stmt -> bind_param("ssss", $data->nomeUsuario,$data->userEmail,$data->userSenha,$data->userDataNasc);
    if($stmt->execute()){
        $response[] = ['msg'=>"Informações inseridas com sucesso"];
    }
    else{
        $response[] = ['msg' =>"Erro ao inserir na tabela:".$stmt->error];
    }
    $stmt->close();
}

// Fecha a conexão com o banco de dados
$conn->close();
echo json_encode(['informações' => $response])
?>
