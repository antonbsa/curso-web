function arredondamento(x) {
    let test1 = x + 1
    let test2 = x + 2

    if(test1 % 5 == 0){
        return test1
    } else if(test2 % 5 ==0){
        return test2
    } else {
        return x
    }
}

console.log(arredondamento(38))