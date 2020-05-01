// Uma factory retorna um novo objeto, então não salva no cache
module.exports = () => {
    return {
        valor: 1,
        inc() {
            this.valor++
        }
    }
}