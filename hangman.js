// Challenge: Hangman!

// Create a file called hangman.js.
// In this file, write a program that will let the user play hangman. The program should work as follows:
// Choose a random word from a list of words.
// In a loop, do the following:
// Ask the user to guess a letter
// If the user guessed a wrong letter, then add one step to the hangman “drawing”
// Display the current completion of the word next to a hangman ASCII "drawing". You can get some inspiration 
// from either here or here
// Keep looping until either the word is found or the hangman is hanged!
// Display a message to the user letting them know what happened

// Save/commit/push

var prompt = require('prompt');

function randomWord(listWords){
    var listLength = listWords.length
    return listWords[Math.floor(Math.random() * listLength)];
}
function isLetterInWord(letter,word){
    var i = 0;
    while(i < word.length) {
        if (word[i] === letter ){
            return i;
        }
        else {
            i++
        }
    }
    return false;
}
function answerArray(word){
    var ansArray = [];
    var i = 0 
    while (i< word.length){
        ansArray.push('_');
        i++;
    }
    return ansArray;
}
var hangManDrawing1 = ["_______________","|         |    ","|              ","|              ",
"|              ","|              ","|              "];
var hangManDrawing2 = ["_______________","|         |    ","|         0    ","|              ",
"|              ","|              ","|              "];
var hangManDrawing3 = ["_______________","|         |    ","|         0    ","|       //|\\  ",
"|              ","|              ","|              "];
var hangManDrawing4 = ["_______________","|         |    ","|         0    ","|       //|\\  ",
"|       // \\  ","|              ","|              "];

// console.log(hangManDrawing1);
// console.log(hangManDrawing2);
// console.log(hangManDrawing3);
// console.log(hangManDrawing4);

var hangManDrawing = [hangManDrawing1,hangManDrawing2,hangManDrawing3,hangManDrawing4]


function hangManGame() {

    var listofWord = ["tennis", "beyonce", "baseball", "basketball"]
    var i = 1;
    var randomWordGame = randomWord(listofWord);
    var wordArray = answerArray(randomWordGame);
    console.log(randomWordGame);
    console.log(wordArray);
    
    function guessALetter(){
            prompt.get('pickLetter', function(err, answers) {
            if (err) {
                console.log('there was an error');
            }
            else {
                var letterIndex = isLetterInWord(answers.pickLetter,randomWordGame);
                if(letterIndex !== false) {
                    wordArray[letterIndex] = answers.pickLetter;
                    console.log(wordArray);
                    guessALetter();
                }
                else if (i < 4 ) {
                    console.log(hangManDrawing[i]);
                    i++
                    guessALetter();
                }
                else {
                    console.log("Game Over, You LOSE");
                }
            }
        });    
    }
    guessALetter();
}
hangManGame();

        

        // function guessALetter() {
        //     prompt.get('guessnumber', function(err, answers) {
        //         var userGuess = Number(answers.guessnumber);
        //         if (err) {
        //             console.log('there was an error');
        //         }
        //         else if (userGuess === randomNumber) {
        //             console.log("Congratulations you are da best!!");
        //         }
        //         else if (userGuess > randomNumber && i < 4) {
        //             console.log("You number is too high");
        //             i++
        //             guessNumber();
        //         }
        //         else if (userGuess < randomNumber && i < 4) {
        //             console.log("You number is too Low");
        //             i++;
        //             guessNumber();
        //         }
        //     });
        // }