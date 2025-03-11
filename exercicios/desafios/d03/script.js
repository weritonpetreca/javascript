let button = document.querySelector('button');
button.addEventListener('click', function(){
    let num = window.prompt('Digite um número inteiro qualquer:');
    window.alert(`Antes de ${num}, temos o número ${num - 1}.\nDepois de ${num}, temos o número ${Number(num) + 1}.`);
})