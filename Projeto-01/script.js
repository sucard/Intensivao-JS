//Variaveis:
//const = O valor não pode ser alterado no decorrer do programa.
//let = O valor pode ser alterado no decorrer do programa.

//Criando a variavel que pega o id do botão play-pause para adicionar funcionalidade
const buttonPlayPause = document.getElementById('play-pause');

//Criando a variavel que pega o id do primeiro capitulo para adicionar funcionalidade
const audioCapitulo = document.getElementById('audio-capitulo');

//Criando a variavel que pega o id do botão de avançar
const buttonForward = document.getElementById('forward');

//Criando variavel que pega o id do botão de retornar
const buttonBackward = document.getElementById('backward');

//Criando variavel que pega o id do titulo da faixa
const nomeCapitulo = document.getElementById('chapter')

//Variavel que guarda o número de capitulos do audio book no caso 10
const numeroCapitulos = 10;

//Variavel para o Javascript verificar se está tocando o audio book atráves de 0 e 1
let taTocando = 0;

//Variavel para o Javascript saber em qual capitulo está
let capituloAtual = 1;

//Função criada para tocar a faixa
function tocarFaixa() {
    audioCapitulo.play();
    buttonPlayPause.classList.remove('fa-play');
    buttonPlayPause.classList.add('fa-pause');
}

//Função criada para pausar a faixa
function pausarFaixa() {
    audioCapitulo.pause();
    buttonPlayPause.classList.remove('fa-pause');
    buttonPlayPause.classList.add('fa-play');
}

//Função para criar a interação de play e pause o audio book alterando o valor de taTocando para verificar na condição if else
function playOrPause() {
    if (taTocando === 0) {
        tocarFaixa();
        taTocando = 1;
    }
    else {
        pausarFaixa();
        taTocando = 0;
    }
}

//Função criada para trocar o nome da faixa junto com a troca da faixa
function trocarNomeFaixa() {
    nomeCapitulo.innerText = 'Capitulo ' + capituloAtual;
}

//Verificando o capitulo e incrementando 1 para avançar a faixa
function proximaFaixa() {
    if (capituloAtual === numeroCapitulos) {
        capituloAtual = 1;
    }
    else {
        capituloAtual = capituloAtual + 1;
    }

    audioCapitulo.src = './books/dom-casmurro/' + capituloAtual + '.mp3';
    tocarFaixa();
    taTocando = 1;
    trocarNomeFaixa();
}

//Verificando o capitulo e incrementando 1 para voltar a faixa
function faixaAnterior() {
    if(capituloAtual === 1) {
        capituloAtual = numeroCapitulos;
    }
    else {
        capituloAtual = capituloAtual - 1;
    }

    audioCapitulo.src = './books/dom-casmurro/' + capituloAtual + '.mp3';
    tocarFaixa();
    taTocando = 1;
    trocarNomeFaixa();
}

//adicionando o evento ao botão de quando pressionado, ele executa a função tocarFaixa
buttonPlayPause.addEventListener('click', playOrPause);

//Adicionando o evento ao botão de quando pressionado, ele avança para proxima faixa
buttonForward.addEventListener('click', proximaFaixa);

//Adicionando o evento ao botão de quando pressionado, ele retorna para faixa anterior
buttonBackward.addEventListener('click', faixaAnterior);




