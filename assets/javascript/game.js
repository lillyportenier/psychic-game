var guessesLeft = 10;
var wins = 0;
var addLetter;
var userInput;
var lettersGuessed = [];



// computer generates random lettter
var computerGuess =
    String.fromCharCode(
        Math.round(Math.random() * 26) + 97
    );

console.log(computerGuess);

// cath user key stroke
document.onkeyup = function(event){
    var keyPress = (String.fromCharCode(event.keyCode)).toLowerCase();
    addLetter(keyPress);
}

// add user guess to array 
function addLetter(userKeypress) {
    var repeatGuess = lettersGuessed.some(function(item){
        return item === userKeypress;
    })
   lettersGuessed.push(userKeypress);   
}
// show letters guessed in browser
function showLetters() {
    var guessesString = 
}
    





// check if user input is correct
// if correct push win ++ to desktop
// if wrong ++ to geuss lesft ocunt
// 

