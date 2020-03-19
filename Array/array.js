console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Ana', 'Roberto')
console.log(aprovados)

aprovados = ['Bia', 'Ana', 'Roberto']
console.log(aprovados[0])
console.log(aprovados[1])
console.log(aprovados[2])
console.log(aprovados[3])

aprovados[3] = 'Paulo'
console.log(aprovados[3])

aprovados.push('Carlos')
console.log(aprovados.length)
aprovados[8] = 'Rafael'
console.log(aprovados)

aprovados.sort()
console.log(aprovados)

delete aprovados[1]
console.log(aprovados[1])
console.log(aprovados[2])

aprovados = ['Bia', 'Ana', 'Roberto']
aprovados.splice(1, 1)
console.log(aprovados)