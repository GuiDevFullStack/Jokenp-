const yourResult = document.querySelector('.your_point').value
const iaRresult = document.querySelector('.IA-point').value
const iachoice = ["Pedra", "Papel", "Tesoura"]

function iaPlay(iachoice) {
    const iaRandom = Math.floor(Math.random() * iachoice.length);
    return iachoice[iaRandom];
}

function clickPapel() {
    console.log("Você clicou no Papel")
    console.log(iaPlay(iachoice))
    if (iaPlay(iachoice) === "IA escolheu Pedra") {
        console.log("você ganhou")

    } else if (iaPlay(iachoice) === "IA escolheu Papel") {
        console.log("empate")

    } else {
        console.log("você perdeu")
    }
}


function clickPedra() {
    console.log("Você clicou na Pedra")
    console.log(iaPlay(iachoice))
    if (iaPlay(iachoice) === "IA escolheu Tesoura") {
        console.log("você ganhou")

    } else if (iaPlay(iachoice) === "IA escolheu Pedra") {
        console.log("empate")

    } else {
        console.log("você perdeu")
    }
}

function clickTesoura() {
    console.log("Você clicou na Tesoura")
    console.log(iaPlay(iachoice))
    if (iaPlay(iachoice) === "IA escolheu Papel") {
        console.log("você ganhou")

    } else if (iaPlay(iachoice) === "IA escolheu Tesoura") {
        console.log("empate")

    } else {
        console.log("você perdeu")
    }
}