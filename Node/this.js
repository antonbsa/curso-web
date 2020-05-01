console.log(this === global)
console.log(this === module)

console.log(this === exports)
console.log(this === module.exports)

// Fora de função, this é igual a exports e module.exports

function logThis() {    // Dentro da função, ele não aponta para exports e module.exports
    console.log('Dentro de uma função ...')
    console.log(this === exports)
    console.log(this === module.exports)
}
logThis()