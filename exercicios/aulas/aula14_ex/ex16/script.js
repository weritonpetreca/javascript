var cont = document.getElementById('cont')
cont.addEventListener('click', Calcular)
var resp = document.getElementById('resp')
function Calcular(){
    var ini = document.getElementById('inini')
    var fin = document.getElementById('infin')
    var pas = document.getElementById('ipass')
    if (ini.value.lenght == "" || fin.value.length == "" || pas.value.length == ""){
        resp.innerHTML = 'Impossível contar. Inseria os parâmetros!'
    } else {
        resp.innerHTML = 'Contando:<br>'
        var i = Number(ini.value)
        var f = Number(fin.value)
        var p = Number(pas.value)
        if (p <= 0)
        window.alert('Passo inválido! Considerando Passo = 1')
        p = 1
        if (i <= f){
            for (var c = i; c <= f; c += p){
                resp.innerHTML += ` ${c} \u{1F449}`
            }
        } else {
            for (var c = i; c >= f; c -= p){
                resp.innerHTML += ` ${c} \u{1F449}`
            }  
        }
        resp.innerHTML += '\u{1F3C1}'
    }
}