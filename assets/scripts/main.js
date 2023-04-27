// Variabili KM e age
let km = prompt("Inserisci il numero di chilometri che vuoi percorrere:");
let age = prompt("Inserisci la tua età:");

// Prezzo al kilometro
let price = km * 0.21;

// Sconto per minorenni e over 65
if (age < 18) {
    price *= 0.8;
} else if (age >= 65) {
    price *= 0.6;
}

// Prime due cifre dopo lo zero
price = price.toFixed(2);

// Output a schermo
document.getElementById("title").innerHTML = `Il prezzo del biglietto è:${price} €`;