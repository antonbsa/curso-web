// Resultados iniciais
let string = '10 20 20 8 25 3 0 30 1'
// Adiciona resultados
addResult = (x) => string = string + ` ${x}`

function resposta(param) {
    let array = param.split(' ')
    let maior = array[0]
    let menor = array[0]
    var cont = 1
    
    for(i in array){
        if(array[i] > maior){
            ++cont
            maior = array[i]
        }

        if(array[i] < menor) {
            menor = array[i]
        }
    }

    return [cont, array.indexOf(menor) + 1]
}

addResult(35)
addResult(-5)
console.log(string)
console.log(resposta(string))

// Não entendi por que o primeiro numero da contando errado.