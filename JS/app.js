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


