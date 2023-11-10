/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/


// ESERCIZIO 1
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// Il ciclo for non inizia perche' la condizione i > 5 non e' vera quindi non effettua il codice all'interno.
// Per far si che il ciclo funzioni bisogna impostare come condizione i < 5.


// ESERCIZIO 2
function addIfEven(num) {
    if (num % 2 === 0) {
        return num + 5;
    }
    return num;
}

// In questa funzione l'errore e' situato nella condizione del costrutto if in quanto solo un = equivale a operatore di assegnamento.
// Percio'per rendere utilizzabile quest'ultimo bisogna scrivere if(num % 2 === 0) e poi scrivere il codice da eseguire.


// ESERCIZIO 3
function loopToFive() {
    for (let i = 0; i <= 5; i++) {
        console.log(i);
    }
}

// Questa funzione dovrebbe creare un loop che scriva i numeri da 0 a 5.
// L'errore presente e' un errore di sintassi perche'  bisogna separare dichiarazione della variabile i, condizione del ciclo e incremento di i con ; e non con la virgola.
// Infine per avere i numeri da 0 a 5 bisogna impostare come condizione i <= 5 altrimenti avremo i numeri solo fino al 4.


// ESERCIZIO 4 (suggerimento: ci sono 7 errori)
function displayEvenNumbers() {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    let evenNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        const curNum = numbers[i]
        if (curNum % 2 === 0) {
            evenNumbers.push(curNum);
        }
        
    }
    return evenNumbers;
}
displayEvenNumbers(); // dovrebbe restituire [2,4,6,8]

console.log(displayEvenNumbers());

// Questa funzione dovrebbe restituire un array contenete solo i numeri pari.
// Sono presenti errori di sintassi nel costrutto if dove nella condizione l'operatore = da solo indica l'assegnamento e non l'ugualianza e il : dopo l'incremento di i nel ciclo for il -1 alla lunghzza dell'array si utilizza solo nel caso come condizione ci sia <=
// bisognava prendere una variabile contenente il numero corrente e pushare quest'ultimo al posto di i.
// Il return va inserito fuori dal ciclo.