function bhaskara(a, b, c) {
    let delta = Math.pow(b, 2) - 4 *(a * c)
    if(delta < 0){
        return 'Delta é negativo!'
    } else {

        let x = ((- b + Math.sqrt(delta)) / (2 * a)).toFixed(2)
        let y = ((- b - Math.sqrt(delta)) / (2 * a)).toFixed(2)

        return `Vetores: ${x} e ${y}`
    }

}

console.log(bhaskara(1, 3, 2))