const input = document.querySelector('input');
const array = [];// 1: riga 2 la variabile array deve essere inizializzata come tale quindi togliere null e mettere [] vuote.

input.addEventListener('keypress', function(event) {

    if (event.code != 'Enter')    return;
    if (input.value.length == 0) return;// 2: riga 7 la condizione con length devo controllare rispetto a un numero e non alla stringa.

    array.push(input.value);// 3: riga 9 cambiare add con push per inserire l'input dell'utente all'interno dell'array.

    const li = document.createElement('li');
    li.classList.add('list-group-item');
    li.innerHTML = input.value; //11: utilizzare innerHTML al posto di text.
    document.querySelector('ul').append(li);// 4: riga 14 al posto di push(li) devo utilizzare append per inserirlo all'interno di ul

    let counter = 0;// 5: riga 16 il counter per essere incrementato deve essere un numero.
    let item    = array[0];
    let max   = 1; // 10: per essere modificata bisogna utilizzare let.
    const elems = [];

    for (let i = 0; i < array.length; i++) {// 6: riga 21 nel ciclo for mancava il .length per far funzionare la condizione.
        let val = array[i];
        
        if (!elems[val]) {
            elems[val] = 1;
            
        } else {
            elems[val]++;
        }

        for (let j = i; j < array.length; j++) {//8: non utilizzare i ma j altrimenti si crea un ciclo infinito.
            if (array[i] == array[j]) {
                counter++;
                if (max < counter){ //9: mancano le parentesi grafe.
                max  = counter;
                item = array[i];
                }
            }
        }

        counter = 0;
    }

    const alert = document.querySelector('.alert');// 7: riga 42 utilizzare il querySelector per ottenere l'elemento perche' con getElementByClassName restituisce HTMLCollection e non posso accedere alle classi.

    alert.classList.remove('d-none');
    alert.classList.add('d-flex');

    alert.querySelector('span:first-child').innerText = item;
    alert.querySelector('span:last-child').innerText = max;

    console.log(`${item} trovato ${max} volte`);// 12: riga 50 utilizzare i backtik `` per creare il messaggio.
});


// 1: riga 2 la variabile array deve essere inizializzata come tale quindi togliere null e mettere [] vuote.
// 2: riga 7 la condizione con length devo controllare rispetto a un numero e non alla stringa.
// 3: riga 9 cambiare add con push per inserire l'input dell'utente all'interno dell'array.
// 4: riga 14 al posto di push(li) devo utilizzare append per inserirlo all'interno di ul.
// 5: riga 16 il counter per essere incrementato deve essere un numero.
// 6: riga 21 nel ciclo for mancava il .length per far funzionare la condizione.
// 7: riga 42 utilizzare il querySelector per ottenere l'elemento perche' con getElementByClassName restituisce HTMLCollection e non posso accedere alle classi.
// 8: non utilizzare i ma j altrimenti si crea un ciclo infinito.
// 9: mancano le parentesi grafe.
// 10: per essere modificata bisogna utilizzare let.
// 11: utilizzare innerHTML al posto di text.
// 12: riga 50 utilizzare i backtik `` per creare il messaggio.