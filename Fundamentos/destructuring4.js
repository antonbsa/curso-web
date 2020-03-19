function rand([min = 0, max = 1000]=[]){
    if(min > max) [min, max] = [max, min]       // invertendo min e max por desestruturação
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand([50, 40]))
console.log(rand([992]))
console.log(rand([, 10]))
console.log(rand([]))       //aqui passa um objeto vazio, que pega os valores padroes/default
console.log(rand())         //aqui SÓ pega valor padrao se for passado um vazio como padrao no parametro da função se nao for passado nada
