const schedule = require('node-schedule')
let tarefa = 1

const tarefa1 = schedule.scheduleJob('*/2 * 23 * * 0', function() {
    console.log(`Executando tarefa ${tarefa}!`, new Date().getHours() + ':' + new Date().getMinutes() + ':' + new Date().getSeconds())
    tarefa++
})

setTimeout(function () {
    tarefa1.cancel()
    console.log('Cancelando a tarefa!')
}, 20000)

const regra = new schedule.RecurrenceRule()
regra.dayOfWeek = [new schedule.Range(0, 5)]
regra.hour = 23
regra.second = 30

const tarefa2 = schedule.scheduleJob(regra, function () {
    console.log('Esecutando Tarefa extra!', new Date().getSeconds())
})