Array.prototype.filter2 = function(callback) {
    newArray = []
    for(let i = 0; i < this.length; i++){
        if(callback(this[i], i, this)) {
            newArray.push(this[i])
        }
    }
    return newArray
}

const produtos = [
    { nome: 'Notebook', preco: 2499, fragil: true },
    { nome: 'IpadPro', preco: 4199, fragil: true },
    { nome: 'Copo de Vdiro', preco: 12.49, fragil: true },
    { nome: 'Copo de Plastico', preco: 18.99, fragil: false },
]

console.log(produtos.filter2(function(p){
  return (p.preco>500)
}))