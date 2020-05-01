module.exports = function(...nomes) {
    return nomes.map(nome => `Boa semana ${nome}!`)
}

// é passado parâmtros através de uma função, que vira parâmetro da module.exports