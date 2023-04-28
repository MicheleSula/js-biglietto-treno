// Variabili
let age;
let km;
let errorMessage;
let price;

// Funzione recursivePrompt
recursivePrompt();

function recursivePrompt(age, km, price) {

  
  age = prompt("Inserisci la tua età:");
  if ((age != "") && (age !== null)) {
    km = prompt("Inserisci il numero di chilometri che vuoi percorrere:");
  } else {
    errorMessage = alert("Non hai inserito correttamente i dati, riprova da capo!");
    return recursivePrompt();
  }

  
  price = parseInt(km) * 0.21;
  // Prezzo scontato per under 18 e over 65
  if (age < 18) {
  price *= 0.8;
  } else if (age >= 65) {
  price *= 0.6;
  }
  // Prime due cifre dopo lo zero di price
  price = price.toFixed(2);


  if ((km != "") && (km !== null)) {
    return document.getElementById("title").innerHTML = `Il prezzo del biglietto è: ${price} €`;
  } else {
    errorMessage = alert("Non hai inserito correttamente i dati, riprova da capo!")
    return recursivePrompt();
  } 
}

// // Variabili KM e age
// let km = prompt("Inserisci il numero di chilometri che vuoi percorrere:");
// let age = prompt("Inserisci la tua età:");


// // Prezzo al kilometro
// let price = km*0.21;


// // Sconto per minorenni e over 65
// if (age < 18) {
//     price *= 0.8;
// } else if (age >= 65) {
//     price *= 0.6;
// }


// // Prime due cifre dopo lo zero
// price = price.toFixed(2);


// // Output a schermo
// document.getElementById("title").innerHTML=`Il prezzo del biglietto è:${price}€`;