let adic = document.getElementById('add')
adic.addEventListener('click', Adicionar)
let conj = []
function Adicionar(){
    let num = document.getElementById('itxtn')
    let n = Number(num.value)
    if (n.length == 0 || conj.indexOf(n) != -1 || n <= 0 || n > 100){
    window.alert('Valor inválido ou já encontrado na lista')
    } else if (conj.length == 0){
        let ini = document.getElementById('vet0')
        ini.remove()
        conj.push(n)
        let opt = document.createElement('option')
        opt.value = `val${n}`
        let valores = document.getElementById('ivet')
        opt.text = `Valor ${n} Adicionado`
        valores.appendChild(opt)
    } else {
        conj.push(n)
        let opt = document.createElement('option')
        opt.value = `val${n}`
        let valores = document.getElementById('ivet')
        opt.text = `Valor ${n} Adicionado`
        valores.appendChild(opt)
    }
    
}
let calc = document.getElementById('final')
final.addEventListener('click', Calcular)
function Calcular(){
    let result = document.getElementById('res')
    result.textContent = ""
    let total = document.createElement('p')
    total.textContent = `Ao todo, temos ${conj.length} números cadastrados`
    result.appendChild(total)
    conj.sort()
    let maior = document.createElement('p')
    maior.textContent = `O maior valor informado foi ${conj[conj.length - 1]}`
    result.appendChild(maior)
    let menor = document.createElement('p')
    menor.textContent = `O menor valor informado foi ${conj[0]}`
    result.appendChild(menor)
    let soma = document.createElement('p')
    let soman = 0
    for (let cont in conj){
        soman += conj[cont]
    }
    soma.textContent = `Somando todos os valores, temos ${soman}`
    result.appendChild(soma)
    let media = document.createElement('p')
    media.textContent = `A média dos valores digitados é ${soman/conj.length}`
    result.appendChild(media)
}