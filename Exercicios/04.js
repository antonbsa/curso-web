function resto(x, y) {
    let result = x / y
    result = Math.floor(result)

    x = x - (y * result)
    return console.log(x)
}

resto(19,5)