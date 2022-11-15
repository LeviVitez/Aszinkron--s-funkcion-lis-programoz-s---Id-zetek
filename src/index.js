async function OsszesIdezet() {

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
        li.innerHTML ='<br />Quote: ' + p.quote + '<br>Author: ' + p.author;
        quotelista.appendChild(li);
    }
}

document.addEventListener('DOMContentLoaded',()=>{
    document.getElementById('osszesIdezet').addEventListener('click',()=>{OsszesIdezet()});

})