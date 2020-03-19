// funcao sem retorno
function imprimirSoma(a, b) {
    console.log(a + b)
}

imprimirSoma(2, 3)

// funcao com retorno
function soma(a, b = 0) {       // o igual é como "valor padrao"
    return a + b
}

console.log(soma(2, 3))