var guessesLeft = 10;
var wins = 0;
var addLetter;


// computer generates random lettter
var computerGuess =
    String.fromCharCode(
        Math.round(Math.random() * 26) + 97
    );

console.log(computerGuess);

// cath user key stroke
var userGuess = document.getElementById("userGuess");

document.onkeyup = function(event){
    userGuess.textContent = event.key;
};
// put user input on screen 

// check if user input is correct
// if correct push win ++ to desktop
// if wrong ++ to geuss lesft ocunt
// 

