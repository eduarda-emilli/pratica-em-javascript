function confirmar() {
    window.alert('Seja bem-vindo(a)')

    var nome = window.prompt('Qual é o seu nome?')
    var n1 = Number(window.prompt(`Olá, ${nome}! Qual foi sua primeira nota?`))
    var n2 = Number(window.prompt('Qual foi sua segunda nota?'))

    med = (n1 + n2)/2

    var msg // deixa a variavel vazia
    if (med >= 6) {
        msg = 'Continue assim! &#128526;'
    } else {
        msg = 'Ta reprovado otário &#128545;'
    }

    var media = document.getElementById('media')
    media.innerHTML = `Calculando a média final de <mark>${nome}</mark>...`
    media.innerHTML += `<p>As notas obtidas foram ${n1} e ${n2}.</p>`
    media.innerHTML += `A média final será <mark>${med}</mark>`
    media.innerHTML += `<p>A mensagem que temos é: <strong style='color:red;'>${msg}</strong></p>`

}