let button = document.querySelector('button');
button.addEventListener('click', function() {
    let produto = prompt('Que produto você está comprando?');
    let preco = Number(prompt(`Quanto custa o ${produto} que você está comprando?`));
    let dinheiro = Number(prompt(`Qual foi o valor que você deu para pagar o ${produto}?`));
    let troco = dinheiro - preco;
    alert(`Você comprou ${produto} que custou ${preco.toLocaleString('pt-BR', {style: 'currency', currency: 'BRl'})} \nDeu ${dinheiro.toLocaleString('pt-BR', {style: 'currency', currency: 'BRl'})} em dinheiro e vai receber ${troco.toLocaleString('pt-BR', {style: 'currency', currency: 'BRl'})} de troco.`); 
})
