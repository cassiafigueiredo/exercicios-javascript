function gerarMensagem() {
    const input = document.getElementById('inputNome')
    const nome = input.value;
    const mensagem = document.getElementById('mensagemNome')
    
    mensagem.textContent = `Olá ${nome}! Seja muito Bem-Vindo(a)!`
}

