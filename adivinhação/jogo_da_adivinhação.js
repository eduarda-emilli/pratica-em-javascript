var numeroPensado = Math.round(Math.random() * 100)

var chute = window.prompt('Em que número eu pensei?')

if (chute == numeroPensado) {
    window.alert(`Uau, você acertou! Eu pensei no ${numeroPensado}`)
} if (chute != numeroPensado) {
    window.alert(`Que pena! Você errou. Eu pensei no ${numeroPensado}`)
}