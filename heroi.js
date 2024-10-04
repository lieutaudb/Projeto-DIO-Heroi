// Variáveis para armazenar o nome do herói
let nome = "Eduarda, a nova estagiária da GFT";

// Função para determinar o nível com base no XP
function determinarNivel(xp) {
    let nivel = "";

    // Estrutura de decisão com if/else if
    if (xp < 1000) {
        nivel = "Ferro";
    } else if (xp >= 1001 && xp <= 2000) {
        nivel = "Bronze";
    } else if (xp >= 2001 && xp <= 5000) {
        nivel = "Prata";
    } else if (xp >= 5001 && xp <= 7000) {
        nivel = "Ouro";
    } else if (xp >= 7001 && xp <= 8000) {
        nivel = "Platina";
    } else if (xp >= 8001 && xp <= 9000) {
        nivel = "Ascendente";
    } else if (xp >= 9001 && xp <= 10000) {
        nivel = "Imortal";
    } else if (xp >= 10001) {
        nivel = "Radiante";
    }

    return nivel;
}

// Função para atualizar o nível com base no XP inserido
function atualizarNivel() {
    // Pegar o valor de XP do input
    let xp = parseInt(document.getElementById('xp-input').value);

    // Verificar se o valor de XP é válido
    if (isNaN(xp) || xp < 0) {
        alert("Por favor, insira um valor de XP válido!");
        return;
    }

    // Determinar o nível do herói
    let nivel = determinarNivel(xp);

    // Atualizar o nível na página
    document.getElementById('heroi-nivel').textContent = nivel;
}

// Função para exibir o nome do herói assim que a página carregar
function exibirNomeHeroi() {
    document.getElementById('heroi-nome').textContent = nome;
}

// Chamar a função ao carregar a página para exibir o nome do herói
document.addEventListener('DOMContentLoaded', exibirNomeHeroi);

// Adicionar evento de clique ao botão "Calcular Nível"
document.getElementById('calcular-nivel').addEventListener('click', atualizarNivel);
