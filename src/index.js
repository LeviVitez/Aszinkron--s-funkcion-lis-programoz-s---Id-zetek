async function OsszesIdezet() {
    document.getElementById('adatLista2').textContent='';
    let response = await fetch('/src/quotes.json');
    let eredmeny = await response.json();
    let adatok = eredmeny.quotes.sort(function (a, b) {
        if (a.author < b.author) { return -1; }
        if (a.author > b.author) { return 1; }
        return 0;
    })

    let quotelista = document.getElementById('adatLista');
    quotelista.textContent = '';

    for (let p of adatok) {
        let li = document.createElement('li');
        li.innerHTML ='Quote: "'+ p.quote +'"'+ '<br>Author: ' + p.author;
        quotelista.appendChild(li);
    }
}

async function The() {
    document.getElementById('adatLista').textContent='';
    let allQuotesArray = [];
    let response = await fetch('/src/quotes.json');
    let result = await response.json();
    let data = result.quotes.sort(function (a, b) {
        if (a.quote < b.quote) { return -1; }
        if (a.quote > b.quote) { return 1; }
        return 0;
    });
    for (let q of data) {
        data.forEach(q => {
            q.quote = q.quote.replaceAll(' the ','<b> the </b>');
            q.quote = q.quote.replaceAll('The ','<b>The </b>');
        })
        allQuotesArray.push(q.quote);
    }
    let dataList = document.getElementById('adatLista2');
    dataList.textContent='';

    for (let q of allQuotesArray) {
        let li = document.createElement('li');
        li.innerHTML = q;
        dataList.appendChild(li);
    }
}

async function idezetkereses() {

    let response = await fetch('/src/quotes.json');
    let eredmeny = await response.json();
    let adatok = eredmeny.quotes.sort(function (a, b) {
        if (a.author < b.author) { return -1; }
        if (a.author > b.author) { return 1; }
        return 0;
    })

    let quotelista = document.getElementById('adatLista');
    quotelista.textContent = '';

    for (let p of adatok) {
        let li = document.createElement('li');
        li.innerHTML ='<br />Quote: "'+ p.quote +'"'+ '<br>Author: ' + p.author;
        let szerzo=document.getElementById('idezetszam');
        if(szerzo==p.author){
            quotelista.appendChild(li);
        }
    }
}

document.addEventListener('DOMContentLoaded',()=>{
    document.getElementById('osszesIdezet').addEventListener('click',()=>{OsszesIdezet()});
    document.getElementById('felkover').addEventListener('click',()=>{The()});
    document.getElementById('idezetszam').addEventListener('change',()=>{idezetkereses()});
})