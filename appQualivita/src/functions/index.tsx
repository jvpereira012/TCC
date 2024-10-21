export async function registroUsuario(nome: string, email: string, senha1: string, senha2: string, datanasc: string, navigation: any) {
    if (senha1 !== senha2) {
      alert("As senhas não coincidem.");
      return;
    }
  
    const formattedDate = datanasc.split('/').reverse().join('-'); // Formato AAAA-MM-DD
  
    try {
      const response = await fetch('http://localhost/testes/cadastro.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nome: nome,
          email: email,
          senha: senha1,
          datanasc: formattedDate,
        }),
      });
  
      const data = await response.json();
  
      if (data.success) {
        alert("Cadastro realizado com sucesso!");
        navigation.navigate('Login'); // Redireciona para a tela de login
      } else {
        alert(data.message || "Erro ao realizar o cadastro.");
      }
    } catch (error) {
      alert("Erro na comunicação com o servidor.");
    }
  }
  
  