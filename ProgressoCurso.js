const total = [85, 58, 38]
const totalProp = proporcao(total)

const efetuadas = [
    '29:52', 
    '14:02', 
    '6:16:00', 
    '01:26:51', 
    '01:26:51', 
    '03:01:43', 
    '03:04:22', 
    '02:06:54', 
    '03:38:14',
    '01:29:25',
    '02:53:30',
    '04:43:13'      // HTML
]

let time = [0, 0, 0]


function setTime(e) {
    let array = []  // auxiliar
    
    for(i in efetuadas){
        array = e[i].toString().split(":")
        if(array.length == 2){
            time[1] += Number(array[0])
            time[2] += Number(array[1])
        } else {
            time[0] += Number(array[0])
            time[1] += Number(array[1])
            time[2] += Number(array[2])
        }
        
    }
    
    for(let i = time.length - 1; i > 0; i--){
        let tempDiv = time[i]/60
        let tempMaior = Math.floor(tempDiv)
        let tempMenor = time[i] - (tempMaior * 60)
        
        time[i] = tempMenor
        time[i - 1] += tempMaior
        
    }
    
    
}
setTime(efetuadas)

function proporcao(val) {
    let prop = val[2]
    let aux = 0

    for(let i = 0; i < 2; i++){
        aux = (aux + val[i]) * 60
    }

    prop += aux
    return prop
}

let progresso = `${((proporcao(time) / totalProp) * 100).toFixed(2).replace('.', ',')} %`

let tempoPercorrido = `Já foi percorrido ${time[0]} horas, ${time[1]} minutos e ${time[2]} segundos do curso,`

console.log(tempoPercorrido, 'o que representa', progresso, 'do total.')