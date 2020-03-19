let tempo = [0.30, 0.14, 6.16, 1.27, 3.02]

function addTempo(x) {
    tempo.push(x)
}

function total(tempo) {
    let totalHR = 0

    for(i in tempo){
        if(tempo[i] < 1) {
            totalHR += tempo[i] / 0.6
        } else {
            let aux = Math.floor(tempo[i])
            totalHR += aux + ((tempo[i] - aux) / 0.6)
        }
    }
    return `${totalHR.toString().substr(0, 2)}h${parseInt((totalHR.toString().substr(totalHR.toString().indexOf('.') + 1, 2))*0.6)}min`
}

console.log('Tempo total do curso até o momento: ' + total(tempo))
