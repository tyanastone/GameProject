// var randomWords = ["jquery", "html", "cascading", "javascript"]
// var wordChoice = randomWords[Math.floor(math.random() * words.length)]
// var answers = []

// created array of words that need to be guessed
var randomWords = ["jquery", "html", "cascading", "javascript"]
// created variable for the guesses that has happened
var guessAmount = 12
// created an empty array to hold the letters that were guessed
var guesses = []
// created variable for the beginning of the array 
var currentWordIndex;
// created variable to hold answers
var answers = []
// created variable to track how many guesses the player has left
var guessesRemaining = 0;
// tracker to tell if game has started
var start = false;
// tracker to tell if game has ended
var done = false;
// track the players wins
var wins = 0;

// create a function to reset game
function gameReset() {
    
    guessesRemaining = guessAmount
    start = false
    currentWordIndex = [Math.floor(Math.random() * randomWords.length)]

    guesses = []
    answers = []

    document.getElementById("hangmanImage").src = ""

    for (var i = 0; i < randomWords[currentWordIndex].length; i++) {
        answers.push("_")
    }
    document.getElementById("pressKeyTryAgain").style.cssText = "display: none"
    document.getElementById("gameover-image").style.cssText = "display: none"
    document.getElementById("youwin-image").style.cssText = "display: none"

    updateDisplay()
}

function updateDisplay() {
    document.getElementById("totalWins").innerText = wins;
    document.getElementById("currentWord").innerText = ""
    for (var i = 0; i < answers.length; i++) {
        document.getElementById("currentWord").innerText += answers[i]
    }
    document.getElementById("remainingGuesses").innerText = guessesRemaining
    document.getElementById("guessedLetters").innerText = guesses
    if (guessesRemaining <= 0) {
        document.getElementById("gameover-image").style.cssText = "display: block"
        document.getElementById("pressKeyTryAgain").style.cssText = "display: block"
        done = true
    }
}
function updateHangmanImage() {
    document.getElementById("hangmanImage").src = "../Images/" + (guessAmount-guessesRemaining) + ".jpg"
}
document.onkeydown = function(event) {
    if (done) {
        gameReset()
        done = false
    } else {
        if (event.keyCode >= 65 && event.keyCode <= 90) {
            makeGuess(event.key.toLowerCase())
        }
    }
}
function makeGuess(letter) {
    if (guessesRemaining > 0) {
        if (!start) {
            start = true
        }
        if (guesses.indexOf(letter) === -1) {
            guesses.push(letter)
            evaluateGuess(letter)
        }
    }
    updateDisplay()
    checkWin()
}
function evaluateGuess(letter) {
    var positions = []
    for (var i = 0; i < randomWords[currentWordIndex].length; i++){
        if (randomWords[currentWordIndex][i] === letter) {
            positions.push(i)
        }
    }
    if (positions.length <= 0) {
        guessesRemaining--;
        updateHangmanImage()
    } else {
        for (var i = 0; i < positions.length; i++){
            answers[positions[i]] = letter
        }
    }
}
function checkWin() {
    if (answers.indexOf("_") === -1) {
        document.getElementById("youwin-image").style.cssText = "display: block"
        document.getElementById("pressKeyTryAgain").style.cssText = "display: block"
        wins++
        done = true
    }
}
