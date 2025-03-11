let button = document.querySelector('button');
button.addEventListener('click', greetings);
function greetings() {
    let nome = window.prompt('Qual é o seu nome?');
    let idade = window.prompt('Qual é a sua idade?');
    let mensagem = `Acabei de conhecer ${nome}, que tem ${idade} anos de idade!`;
    window.alert(mensagem);}
