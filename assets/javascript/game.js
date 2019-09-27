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
    
    if (lettersGuessed.indexOf(keyPress) > -1) {
        alert("You Guessed that already!??");
    }
    else {
        addLetter(keyPress);
        lettersGuessed.push(keyPress);
    }
}

// add user guess to array 
function addLetter(letter) {

function showLetters() {
    document.getElementById("userGuess").append(letter);
}
    showLetters();

function guessRight() {

    if (lettersGuessed === computerGuess){
        alert("You WON!!!!!");
        wins++;
        winsFunc();
        reset();

    }
    else if (guessesLeft === 0) {
        alert("Sorry but you lost! Better luck next time!");
        reset();
    }
    else 
    guessesLeft = guessesLeft -1;
    showGuessesLeft();

    }
function winsFunc(){
    document.getElementById("numWins").innerHTML = wins;
}   
function reset(){
    lettersGuessed = [];
    guessesLeft = 10;
}
function showGuessesLeft(){
    document.getElementById("numGuesses").innerHTML = guessesLeft;
}
guessRight();
}
