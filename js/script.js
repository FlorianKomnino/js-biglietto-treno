console.log('Hello World!');

let pricePerKm = 0.21;

let tripLength = prompt ('Inserisci la lunghezza del tuo viaggio in kilometri');
let userAge = prompt ('Inserisci la tua età');

let ticketPrice = tripLength * 0.21;
let dicountsApplied

    if (userAge < 18) {
        discountsApplied = 20 / 100;
    } 
    else if (userAge >= 65) {
        discountsApplied = 40 / 100;
    } 
    else {
        discountsApplied = 1;
}



document.getElementById('ticketPrice').innerHTML = tripLength * 0.21;