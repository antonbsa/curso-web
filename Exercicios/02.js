function tipoTriang(x, y, z) {
    if(x == y && x == z){
        console.log("Equilátero")
    } else if (x == y || x == z || y == z) {
        console.log("Isóceles")
    } else {
        console.log('Escaleno')
    }
}

tipoTriang(3, 1, 2)