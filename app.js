// Declaração do array para armazenar os nomes dos amigos
let amigos = [];

// Seleção dos elementos do DOM
let nomeInput = document.getElementById("amigo");
let listaAmigos = document.getElementById("listaAmigos");
let resultadoContainer = document.getElementById("resultado");

// Função para adicionar amigos à lista
function adicionarAmigo() {
    // Captura o valor do campo de entrada
    const nome = nomeInput.value.trim();

    // Validação: Verifica se o campo de entrada não está vazio
    if (!nome) {
        alert("Por favor, insira um nome.");
        return; // Impede que o nome seja adicionado se estiver vazio
    }

    // Adiciona o nome ao array de amigos
    amigos.push(nome);

    // Atualiza a lista de amigos exibida na tela
    atualizarListaAmigos();

    // Limpa o campo de entrada
    nomeInput.value = "";
}

// Função para atualizar a lista de amigos no HTML
function atualizarListaAmigos() {
    // Limpa a lista atual
    listaAmigos.innerHTML = '';

    // Percorre o array de amigos e adiciona cada nome como um <li>
    amigos.forEach(function(amigo) {
        const li = document.createElement("li");
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

// Função para sortear um amigo aleatório
function sortearAmigo() {
    // Valida se o array de amigos não está vazio
    if (amigos.length === 0) {
        alert("A lista de amigos está vazia. Adicione nomes antes de sortear.");
        return; // Impede o sorteio se não houver amigos
    }

    // Gera um índice aleatório
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtém o nome sorteado com base no índice aleatório
    const amigoSorteado = amigos[indiceAleatorio];

    // Atualiza o conteúdo do elemento de resultado com o nome sorteado
    atualizarResultado(amigoSorteado);
}

// Função para exibir o resultado do sorteio
function atualizarResultado(resultado) {
    // Limpa o conteúdo anterior do resultado
    resultadoContainer.innerHTML = '';

    // Cria um novo elemento <p> para exibir o nome sorteado
    const p = document.createElement('p');
    p.textContent = `O amigo secreto sorteado é : ${resultado}`;

    // Adiciona o novo <p> à área de resultado
    resultadoContainer.appendChild(p);
}
