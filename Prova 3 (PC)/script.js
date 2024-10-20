const pedra = document.querySelector('#pedra')
const papel = document.querySelector('#papel')
const tesoura = document.querySelector('#tesoura')
const msg = document.querySelector('.mensagem')

const pontoPlayer = document.querySelector('#pontosJogador')
const pontoMaq = document.querySelector('#pontosMaquina')

const imgMaq = document.getElementById('maquina')

let counterMaq = 0;
let counterPlayer = 0;

function randomMaquina(max) {
    const random = Math.floor(Math.random() * max);

    if (random == 0) {
        return this.jogadaMaquina = 'pedra';
    }
    if (random == 1) {
        return this.jogadaMaquina = 'papel';
    }
    if (random == 2) {
        return this.jogadaMaquina = 'tesoura';
    }
}

function jogar(jogada) {
    let jogadaMaquina = randomMaquina(3);

    console.log(jogadaMaquina);
    if (jogada == jogadaMaquina) {
        imgMaq.src = 'Imagens/' + jogada + '.png';
        msg.innerHTML = 'Houve um empate!';
    }

    if (jogada == 'pedra' && jogadaMaquina == 'papel') {
        imgMaq.src = 'Imagens/papel.png';
        msg.innerHTML = 'Você perdeu';
        counterMaq += 1;
    } else if (jogada == 'pedra' && jogadaMaquina == 'tesoura') {
        imgMaq.src = 'Imagens/tesoura.png';
        msg.innerHTML = 'Voce ganhou'
        counterPlayer += 1;
    }
    
    if (jogada == 'papel' && jogadaMaquina == 'tesoura') {
        imgMaq.src = 'Imagens/tesoura.png';
        msg.innerHTML = 'Você perdeu';
        counterMaq += 1;
    } else if (jogada == 'papel' && jogadaMaquina == 'pedra') {
        imgMaq.src = 'Imagens/pedra.png';
        msg.innerHTML = 'Você ganhou'
        counterPlayer += 1;
    }

    if (jogada == 'tesoura' && jogadaMaquina == 'pedra') {
        imgMaq.src = 'Imagens/pedra.png';
        msg.innerHTML = 'Você perdeu';
        counterMaq += 1;
    } else if (jogada == 'tesoura' && jogadaMaquina == 'papel') {
        imgMaq.src = 'Imagens/papel.png';
        msg.innerHTML = 'Voce ganhou'
        counterPlayer += 1;
    }
    pontoMaq.innerHTML = counterMaq;
    pontoPlayer.innerHTML = counterPlayer;
}