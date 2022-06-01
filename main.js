function enviar_jogo_1() {
    let res = document.getElementById('res')
    let placar1 = document.getElementById('jogo1-1')
    let placar2 = document.getElementById('jogo1-2')
    let placarA = Number(placar1.value)
    let placarB = Number(placar2.value)
    let time1 = document.getElementById('time1')
    let time2 = document.getElementById('time2')
    let tfinal1 = document.getElementById('time5') 
    if (placarA > placarB) {
        tfinal1.innerHTML = `${time1}`
    } else {
        if (placarA < placarB) {
            tfinal1.innerHTML = `${time2}`
        } else {
            res.innerHTML = `Digite um placar válido (Sem Empate)!`
        }
    }
}
