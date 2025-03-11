let botao = document.querySelector('button');
botao.addEventListener('click', function(){
    let metros = prompt('Digite uma distância em metros (m):');
    metros = Number(metros.replace(',','.'));
    let display = document.querySelector('div#display');
    display.innerHTML = `<h2>A distância de ${metros.toLocaleString('pt-BR')} metros, corresponde a...</h2>`;
    display.innerHTML += `<p>${(metros/1000).toLocaleString('pt-BR')} quilômetros (Km)</p>`;
    display.innerHTML += `<p>${(metros/100).toLocaleString('pt-BR')} hectômetros (Hm)</p>`;
    display.innerHTML += `<p>${(metros/10).toLocaleString('pt-BR')} decâmetros (Dam)</p>`;
    display.innerHTML += `<p>${(metros*10).toLocaleString('pt-BR')} decímetros (Dm)</p>`;
    display.innerHTML += `<p>${(metros*100).toLocaleString('pt-BR')} centímetros (Cm)</p>`;
    display.innerHTML += `<p>${(metros*1000).toLocaleString('pt-BR')} milimetros (mm)</p>`;
    })