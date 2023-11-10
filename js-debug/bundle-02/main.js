/*******************************************************************************
​
    Per questo esercizio, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?
​
    Inserisci i tuoi commenti con le risposte alla fine dell'esercizio
​
*******************************************************************************/


// ESERCIZIO 1
function checkAge() {
    const myAge = 32;
    let message = '';

    if (myAge < 18) {
        message = `Sei troppo giovane! Hai ${myAge} anni!`;
    } else {
        message = 'Hai più di 18 anni!';
    }
    return message
}
checkAge();

// Questa funzione ritorna un messaggio in base all'eta'.
// Gli errori presenti sono due: il primo e' che message deve essere dichiarato con let e non con const perche' altrimenti non posso modificarne il contenuto, il secondo che devo utilizzare return message a fine funzione per ottenere il messaggio in console.

// ESERCIZIO 2
function printColorsNumber() {
    const colors = ['blue', 'red', 'yellow', 'green', 'black'];
    console.log(`Nella mia palette ci sono ${colors.length} colori!`);
}
printColorsNumber();

// Questa funzione restituisce un messaggio che dice quanti colori ci sono in totale nell'array.
// Errore di sintassi a riga 33 la scritta length era scritta non correttamente.


// ESERCIZIO 3
function addNumbers() {
    const userNumber = parseInt(prompt('Inserisci un numero'));
    const total = userNumber + 12;

    console.log(`Il risultato finale è ${total}`);
}
addNumbers();

// Funzione che chiede un numero in entrata inserito dall'utente e lo incrementa di 12 restituendo la somma.
// Il dato restituito da un propt e' di tipo stringa quindi bisogna utilizzare parseInt sul prompt per avere come tipo di dato un numero intero e poterlo sommare.


// ESERCIZIO 4
function checkAccess() {
    const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];
    const userEmail = prompt('Inserisci il tuo indirizzo email');

    let grantAccess = false;

    if (addresses.includes(userEmail)) {
        grantAccess = true;
    }

    if (grantAccess === true) {
        console.log('Accesso consentito!');
    } else {
        console.log('Accesso negato!');
    }
}
checkAccess();

// Funzione che controlla se la mail inserita dall'utente e' presente nell'array di mail consentite.
// L'errore e' nella variabile grantAccess perche i valori true e false erano scritti come stringa mente nella verifica di questi ultimi il controllo avveniva su valori booleani.


// ESERCIZIO 5 (suggerimento: c'è un solo errore)
function checkAccessImproved() {
    const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];

    const userEmail = prompt('Inserisci il tuo indirizzo email');

    let grantAccess = 'false';

    for (let i = 0; i < addresses.length; i++) {
        const email = addresses[i];

        if (userEmail.length > 5) {

            if (email === userEmail) {
                grantAccess = 'true';

            }

        }

        if (grantAccess) {
            console.log('Accesso consentito!');
        } else {
            console.log('Accesso negato!');
        }
    }
    checkAccessImproved();
}

// Come la funzione precedente.
//L'errore presente e' una dimenticanza della chiusura delle parentesi grafe della funzione.