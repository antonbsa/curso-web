const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso: 13
} 

console.log(Object.keys(pessoa))    // retorna nome das chaves
console.log(Object.values(pessoa))  // retorna valores das chaves
console.log(Object.entries(pessoa)) // retorna array com nome e valores das chaves

Object.entries(pessoa).forEach(([chave, valor]) => {
    console.log(`${chave}: ${valor}`)
})

Object.defineProperty(pessoa, 'dataNascimento', {       // mais controle
    enumerable: true,
    writable: false,
    value: '01/01/2019'
})

pessoa.dataNascimento = '01/01/2017'
console.log(pessoa.dataNascimento)
console.log(Object.keys(pessoa))

const dest = { a: 1 }
const o1 = { b: 2 }
const o2 = { c: 3, a: 4 }
const obj = Object.assign(dest, o1, o2) // adiciona os valores no primeiro objeto, se já existe ele sobrescreve o valor
console.log(obj)