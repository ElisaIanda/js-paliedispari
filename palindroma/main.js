const btn = document.getElementById("button");
const inputWord = document.getElementById("input-word");

btn.addEventListener("click", function () {


    const inputWord = isPalindroma()
    console.log ="Hai scelto la parola" + " " + inputWord;



    if (word === reversWord){
        return true;
    }else{
        return false;
    }
})


function isPalindroma(word){

    word.split("").reverse().join();

    // array formato dalle singole lettere della parola
    const letters = word.split("");

    // const reversLetters = letters.reverse()

    const reversLetters = [];

    for (let i = 0; i < letters.length; i++){
        reversLetters.unshift(letters[i]);
    }

    let reversWord = "";

    for (let i = 0; i < reversLetters.length; i++){
        reversWord += reversLetters[i];
    }

    console.log (reversLetters, reversWord);

    // if (word === reversWord){
    //     return true;
    // }else{
    //     return false;
    // }
    return word === reversWord;
}

isPalindroma("");
