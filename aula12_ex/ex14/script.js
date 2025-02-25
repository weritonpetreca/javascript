function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    msg.innerHTML = `Agora são ${hora} horas e ${minuto} minutos.`
    if (hora >= 0 && hora < 12) {
        //Bom Dia!
        img.src = '../imagens/manha_p.png'
        document.body.style.backgroundColor = '#faf1e5'
    } else if (hora >= 12 && hora < 18) {
        //Boa Tarde!
        img.src = '../imagens/tarde_p.png'
        document.body.style.backgroundColor = '#3c5762'
    } else {
        //Boa Noite!
        img.src ='../imagens/noite_p.png'
        document.body.style.backgroundColor = '#101d25'
    }
}