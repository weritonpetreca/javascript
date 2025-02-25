var verif = window.document.getElementById('ver')
verif.addEventListener('click', verificar)
function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('inasc')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('sex')
        var idade = ano - Number(fano.value)
        var genero = ""
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = 'Homem'
            if (idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', '../imagens/crianca_m_p.png')
            } else if (idade < 21){
                //jovem
                img.setAttribute('src', '../imagens/jovem_m_p.png')
            } else if (idade < 50){
                //adulto
                img.setAttribute('src', '../imagens/adulto_m_p.png')
            } else {
                //idoso
                img.setAttribute('src', '../imagens/velho_m_p.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', '../imagens/crianca_f_p.png')
            } else if (idade < 21){
                //jovem
                img.setAttribute('src', '../imagens/jovem_f_p.png')
            } else if (idade < 50){
                //adulto
                img.setAttribute('src', '../imagens/aduto_f_p.png')
            } else {
                //idoso
                img.setAttribute('src', '../imagens/velho_f_p.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos um(a) ${genero} com ${idade} anos.`
        res.appendChild(img)
    }   
}