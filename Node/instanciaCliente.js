const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

const contadorC = require('./instanciaNova')()
const contadorD = require('./instanciaNova')()

contadorA.inc()
contadorA.inc()
console.log(contadorB.valor)                    //salva no cache

contadorD.inc()
contadorD.inc()
console.log(contadorC.valor, contadorD.valor)   //não salva no cache