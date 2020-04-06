const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true },
]

// Todo aluno é bolsista?
// Meu
const todosBolsistas = alunos.map(a => a.bolsista)
.reduce(function(resultado, bolsista) {
    if(bolsista && resultado){
        return true
    } else {
        return false;
    }
}, true)

console.log(todosBolsistas)

// Aula
const todosBolsistas2 = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas2))

///////////////////////////////////////////

// Algun dos alunos é bolsista?
// Meu
const algumBolsista = alunos.map(a => a.bolsista)
.reduce(function(resultado, bolsista) {
    if(bolsista || resultado){
        return true
    } else {
        return false;
    }
}, false)

console.log(algumBolsista)

// Aula
const algumBolsista2 = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista2))