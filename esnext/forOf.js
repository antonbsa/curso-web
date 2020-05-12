for (let letra of 'Cod3r') {
    console.log(letra)
}

const assuntosEcma = ['Map', 'Set', 'Promise']

for (let i in assuntosEcma) {
    console.log(i)
}

for (let i of assuntosEcma) {
    console.log(i)
}

const assuntosMap = new Map([
    ['Map', { abordado: true }],
    ['Set', { abordado: true }],
    ['Promise', { abordado: false }]
])

console.log('')

for (let assunto of assuntosMap) {
    console.log(assunto)
}

console.log('')

for (let chave of assuntosMap.keys()) {
    console.log(chave)
}

console.log('')

for (let valor of assuntosMap.values()) {
    console.log(valor)
}

console.log('')

for (let [ch, vl] of assuntosMap.entries()) {
    console.log(ch, vl)
}

const s = new Set(['a', 'b', 'c'])
for (let letra of s) {
    console.log(letra)
}