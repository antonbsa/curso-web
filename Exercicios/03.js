a = function(base, expoente) {
    let result = base
    if(expoente == 0){
        console.log('Erro!')
    }
    while(expoente > 1){
        result = result * base
        expoente--
    }
    return console.log(result)
}

a(2, 4)