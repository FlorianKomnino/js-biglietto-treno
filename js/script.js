console.log('Hello World!');

let pricePerKm = 0.21;

let tripLength = prompt ('Inserisci la lunghezza del tuo viaggio in kilometri');
let userAge = prompt ('Inserisci la tua età');

let ticketPrice = tripLength * 0.21;
let dicountsApplied = 1;
document.getElementById('discountsApplied').innerHTML = '0&percnt;';

    if (userAge < 18) {
        discountsApplied = 20 / 100;
        document.getElementById('discountsApplied').innerHTML = '20&percnt;';
    } 
    else if (userAge >= 65) {
        discountsApplied = 40 / 100;
        document.getElementById('discountsApplied').innerHTML = '40&percnt;';
    }

console.log(ticketPrice);
console.log(discountsApplied);


let finalTicketPrice = ticketPrice - (ticketPrice * discountsApplied);

document.getElementById('finalTicketPrice').innerHTML = finalTicketPrice.toFixed(2) + '&euro;';

document.getElementById('ticketPrice').innerHTML = (tripLength * 0.21).toFixed(2) + '&euro;';