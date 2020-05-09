const fs = require('fs')

const produto = {
    nome: 'Celular',
    preco: 1249.99,
    desconto: 0.15
}

fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), err => {
    console.log(err || 'Arquivo salvo!')
})


let pessoa = {
    nome: "anton",
    sobrenome: "Barboza",
    idade: 22,
    peso: 68
}