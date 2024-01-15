let listaDeNumerosSorteados = [];
let NumeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Femele', {rate:1.2});
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');
}    

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;
   
    if (chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'acertou');
        let palavrasTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Voce descobriu o Numero secreto com ${tentativas} ${palavrasTentativas}`;
        exibirTextoNaTela('p',mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O numero secreto e menor');
        } else {
            exibirTextoNaTela('p', 'O numero secreto e maior');
        }
        tentativas++;
        LimparCampo();
    } 
}

function gerarNumeroAleatorio() {
    let NumeroEscolido = parseInt(Math.random() * NumeroLimite + 1);
    let QuantidadeDeElementosNaLista =listaDeNumerosSorteados.length;

    if ( QuantidadeDeElementosNaLista == NumeroLimite){
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(NumeroEscolido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(NumeroEscolido);
        return NumeroEscolido;
    }
}

function LimparCampo() {
    chute = document.querySelector('input');
    chute.value ='';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    LimparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disable',true);
}












