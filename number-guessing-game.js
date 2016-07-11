// Number guessing game!
// Create a file called number-guessing-game.js.
// In this file, re-write your number guessing game (from the basic javascript workshop) for the command line!
// Instead of using prompt and alert, you will have to use capabilities from NodeJS and any external module.
// HINT: there is an npm library called prompt that can help you with that :)

// Save/commit/push

// The Penniless Gambler
// Challenge: create a simple HTML file that will only be used for the purposes of running JavaScript in the browser. 
// Create a guess.js file and add it to a <script> tag of your HTML file. This is simply so you can load your HTML 
//file in the browser and do the challenge: creating a number guessing game.
// Generate a random number between 1 and 100. Using the browser functions prompt and alert, ask the user to guess 
// the number. You should give them 4 tries to guess the number. If they guess wrong, tell them if it's higher or 
//lower.
// If they guess right, congratulate them. Otherwise, give them a message saying what the correct number was, as 
//well as their list of guesses.

var prompt = require('prompt');

function creatingNumberGame() {

    var randomNumber = Math.floor(Math.random() * 100);
     var i = 1;
     console.log(randomNumber);

    function guessNumber() {
        prompt.get('guessnumber', function(err, answers) {
            var userGuess = Number(answers.guessnumber);
            if (err) {
                console.log('there was an error');
            }
            else if (userGuess === randomNumber) {
                console.log("Congratulations you are da best!!");
            }
            else if (userGuess > randomNumber && i < 4) {
                console.log("You number is too high");
                i++
                guessNumber();
            }
            else if (userGuess < randomNumber && i < 4) {
                console.log("You number is too Low");
                i++;
                guessNumber();
            }
        });
    }
    guessNumber();
}
creatingNumberGame();