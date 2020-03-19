function reais(valor, moeda = 'R$') {
    return console.log(`${moeda} ${valor.toFixed(2).replace('.',',')}`)
}

let din = 0.1 + 0.2
console.log(din)
reais(din)