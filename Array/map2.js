const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 13.90 }',
    '{ "nome": "Kit de Lápis", "preco": 41.22 }',
    '{ "nome": "Caneta", "preco": 7.50 }'
]
// Meu método

const soPreco = carrinho.map(
    (e, index) => JSON.parse(carrinho[index]).preco
)

console.log(soPreco)

// Método da aula

const paraObjeto = json => JSON.parse(json)
const apenasPreco = produto => produto.preco

const result = carrinho.map(paraObjeto).map(apenasPreco)
console.log(result)