
const yourResult = document.querySelector('.result_human')
const iaResult = document.querySelector('.result_ia')
const iachoice = ["IA escolheu Papel", "IA escolheu Pedra", "IA escolheu Tesoura"]
const resultado = document.querySelector('.result')
const pedra = document.querySelector('pedra')
const papel = document.querySelector('papel')
const tesoura = document.querySelector('tesoura')

let yourPoint = 0
let iaPoint = 0


function iaPlay(iachoice) {
    const iaRandom = Math.floor(Math.random() * iachoice.length);
    return iachoice[iaRandom];
}

function clickPapel() {
    console.log("Você escolheu Papel")
    const iaescolha = iaPlay(iachoice);
    console.log(iaescolha);

    if (iaescolha === "IA escolheu Pedra") {
        yourPoint++
        yourResult.innerHTML = yourPoint
        resultado.innerHTML = "você ganhou"
        resultado.style.color = "green"
    }

    if (iaescolha === "IA escolheu Papel") {
        resultado.innerHTML = "empate"
        resultado.style.color = "black"
    }
    if (iaescolha === "IA escolheu Tesoura") {
        iaPoint++
        iaResult.innerHTML = iaPoint
        resultado.innerHTML = "você perdeu"
        resultado.style.color = "red"
    }
}

function clickPedra() {
    console.log("Você escolheu Pedra")
    const iaescolha = iaPlay(iachoice);
    console.log(iaescolha)

    if (iaescolha === "IA escolheu Tesoura") {
        yourPoint++
        yourResult.innerHTML = yourPoint
        resultado.innerHTML = "você ganhou"
        resultado.style.color = "green"
    }
    if (iaescolha === "IA escolheu Pedra") {
        resultado.innerHTML = "empate"
        resultado.style.color = "black"
    }
    if (iaescolha === "IA escolheu Papel") {
        iaPoint++
        iaResult.innerHTML = iaPoint
        resultado.innerHTML = "você perdeu"
        resultado.style.color = "red"
    }
}

function clickTesoura() {
    console.log("Você escolheu Tesoura")
    const iaescolha = iaPlay(iachoice);
    console.log(iaescolha)

    if (iaescolha === "IA escolheu Papel") {
        yourPoint++
        yourResult.innerHTML = yourPoint
        resultado.innerHTML = "você ganhou"
        resultado.style.color = "green"
    }
    if (iaescolha === "IA escolheu Tesoura") {
        resultado.innerHTML = "empate"
        resultado.style.color = "black"
    }
    if (iaescolha === "IA escolheu Pedra") {
        iaPoint++
        iaResult.innerHTML = iaPoint
        resultado.innerHTML = "você perdeu"
        resultado.style.color = "red"
    }
}
