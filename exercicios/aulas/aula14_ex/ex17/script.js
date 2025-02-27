var gerar = document.getElementById('gerar')
gerar.addEventListener('click', Gerar)
var res = document.getElementById('ires')
function Gerar(){
    var num = document.getElementById('itxtn')
    if (num.value.length == 0){
        window.alert('Por favor, digite um número!')
    } else {
        res.innerHTML = ''
        var i = Number(num.value)
        for (var c = 1; c <= 10; c++){
            var item = document.createElement('option')
            item.value = `res${c}`
            //item.setAttribute('value', `res${c}`)
            item.text = `${1}  X  ${c} = ${c*i}`
            res.appendChild(item)
        }
    }
}