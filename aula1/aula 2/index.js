const nome = prompt("Digite seu nome")
window.document.body.innerHTML +=("Seu nome é:", nome)
window.document.body.innerHTML +=("<br/> Seu nome tem tantas letras:", nome.length)
window.document.body.innerHTML +=("Seu nome é:", nome[1])
window.document.body.innerHTML +=("Seu nome é:", nome.indexOf('a'))
window.document.body.innerHTML +=("Seu nome é:", nome.slice(-3))

