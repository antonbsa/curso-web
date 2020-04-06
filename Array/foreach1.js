
aprovados.forEach(nome => console.log(nome))
const aprovados = ['Ana', 'Aldo', 'Daniel', 'Raquel']

aprovados.forEach(function(nome, indice) {
    console.log(`${indice + 1}) ${nome}`)
})

const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados) 