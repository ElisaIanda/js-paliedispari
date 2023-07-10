// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) 
// per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari 
// (usando una funzione)
// Dichiariamo chi ha vinto.

const inputPariDispari = document.getElementById("input-pari-dispari");
const usernumber = document.getElementById("input-number");
const btn = document.getElementById("button");
const result = document.getElementById("result");
const chose = document.getElementById("chose");
const choseNumber = document.getElementById("chose-number");
const sommaNumber = document.getElementById("somma-number");
const numberRandom = document.getElementById("random-number");
let somma = ""


btn.addEventListener("click", function () {

    const pariDispari = inputPariDispari.value;
    chose.innerHTML = "Hai scelto" + " " + inputPariDispari.value;
    const number = parseInt(usernumber.value);
    choseNumber.innerHTML = "Hai scelto" + " " + number;


    const pcNumber = randomNumber();
    console.log("Numero del pc: " + pcNumber);

    const result = evenOdd(somma);
    console.log("risultato: " + result);


    if (result === pariDispari) {
        document.getElementById("result").innerHTML = `Hai Vinto`
        console.log("Hai Vinto");
    }
    else {
        document.getElementById("result").innerHTML = `Hai Perso`
        console.log("Hai Perso");
    }
})


function randomNumber(max) {
    
    if (typeof max !== "number") {
        max = 5;
    }

    const num = Math.floor(Math.random() * max);

    numberRandom.innerHTML = "Il numero random è" + " " + num;

    somma = usernumber + num;

    // server per esporre fuori dalla funzione un valore qualsiasi
    return num;
}

// Creo funzione che controlla se il numero inserito è pari o dispari
function evenOdd(n) {
    let evenOdd = "";
    if (n % 2 === 0) {
        evenOdd = "pari";
    }
    else {
        evenOdd = "dispari";
    }
    return evenOdd;
}
