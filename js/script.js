console.log('Hello World!');

let pricePerKm = 0.21;

let tripLength = prompt(parseInt('Inserisci la lunghezza del tuo viaggio in kilometri'));
let userAge = prompt(parseInt('Inserisci la tua età'));

let ticketPrice = tripLength * 0.21;
let discountsApplied = 0;
let printedPercentage = '0&percnt;'

if (isNaN(tripLength) || isNaN(userAge)) {
    alert('Metti un numero SCELLERATO! ...o ti veniamo a cercare ;)');
}

if (userAge < 18) {
    discountsApplied = 20 / 100;
    printedPercentage = '20&percnt;';
}
else if (userAge >= 65) {
    discountsApplied = 40 / 100;
    printedPercentage = '40&percnt;';
}

console.log(ticketPrice);
console.log(discountsApplied);

let finalTicketPrice = ticketPrice - (ticketPrice * discountsApplied);

document.getElementById('ticketPrice').innerHTML = (tripLength * 0.21).toFixed(2) + '&euro;';

document.getElementById('finalTicketPrice').innerHTML = finalTicketPrice.toFixed(2) + '&euro;';

document.getElementById('discountsApplied').innerHTML = printedPercentage;