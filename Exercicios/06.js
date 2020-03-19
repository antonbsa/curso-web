function valorReal(x){
    return `R$ `+ x.toFixed(2).replace('.',',')
}

function jurSimples(capIni, txJuros, meses) {
    let result = capIni
    while(meses > 0){
        result = result + (capIni * txJuros)
        meses--
    }
    return result
}

function jurComp(capIni, txJuros, meses) {
    let result = capIni
    while(meses > 0){
        result = result + (result * txJuros)
        meses--
    }
    return result
}

function difPropor(x, y) {
    if(x >= y) {
        let a = 1 - (y / x)
        let string = `${a.toString().substr(2,2)},${a.toString().substr(5,2)}%`
        
        if(string.startsWith("0")){
            return `Diferença de ${string.substr(1,5)}`    
        } else {
            return `Diferença de ${string}`
        } 
    } else {
        let a = 1 - (x / y)
        let string = `${a.toString().substr(2,2)},${a.toString().substr(5,2)}%`
        
        if(string.startsWith("0")){
            return `Diferença de ${string.substr(1,5)}`    
        } else {
            return `Diferença de ${string}`
        } 
    }
}

let a = jurSimples(1000, 0.04, 24)
let b = jurComp(1000, 0.04, 24)

console.log('Juros simples: ' + valorReal(a))
console.log('Juros compostos: ' + valorReal(b))
console.log(difPropor(a, b))