
const btn = document.getElementById("btn");
const userInput = document.getElementById("input-word");
const resultInput = document.getElementById("result-input");


btn.addEventListener("click", function () {

    const word = userInput.value;
    console.log(word);

    if (check(word) === true) {
        resultInput.innerHTML = "é palindroma"
    } else {
        resultInput.innerHTML = "non è palindroma"
    }
}
)


function check(randomWord) {
    const newWord = randomWord.split("");
    console.log(newWord);

    let arrayReverse = newWord.reverse();
    console.log(arrayReverse);

    reverseword = arrayReverse.join("");

    if (randomWord === reverseword) {
        return true;
    } else {
        return false;
    }
}


// Esercizio fatto in classe
// function isPalindroma(word) {
//     // word.split("").reverse().join();

//     // creiamo un array formato dalle singole lettere della parola
//     const letters = word.split("");

//     // Invertito l'ordine degli elementi all'interno dell'array
//     // const reverseLetters = letters.reverse()
//     const reverseLetters = [];

//     for (let i = 0; i < letters.length; i++) {
//         // Aggiunge un elemento ad un array, all'indice 0
//         reverseLetters.unshift(letters[i]);
//     }

//     // Creata una stringa unendo le lettere dell'array al rovescio
//     // let reverseWord = reverseLetters.join("");
//     let reverseWord = "";

//     for (let i = 0; i < reverseLetters.length; i++) {
//         reverseWord += reverseLetters[i];
//     }

//     console.log(reverseLetters, reverseWord);

//     // const result = word === reverseWord;
//     // return result

//     /* 
//     if (word === reverseWord) {
//       return true;
//     } else {
//       return false;
//     } */

//     return word === reverseWord; // true o false a seconda del caso
// }

// const result = isPalindroma("ciao");