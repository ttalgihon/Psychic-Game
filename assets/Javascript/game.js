// This is a for-loop that contains the alphabet in lower case.
let alphabet = "";
for (let i = 97; i <= 122; i++) {
    alphabet += String.fromCharCode(i)
};

// Create an object
var gamestats = {
    win: 0,
    lose: 0,
    numGuessleft: 9,
    playerChoice: [],
};

//Display the object gamestats data in the html.
document.getElementById("winP").textContent = gamestats.win;
document.getElementById("loseP").textContent = gamestats.lose;
document.getElementById("guessP").textContent = gamestats.numGuessleft;
document.getElementById("demo").textContent = gamestats.playerChoice;

// A variable that randomly picks a letter from var 'alphabet' for the computer.
let pickedcomputerletter = alphabet[Math.floor(Math.random()*alphabet.length)];

// A variable that holds the letter pressed by the player in lower case then,
// pushed that letter into an array called playerchoices.
let pickedplayerletter = document.onkeypress.key.toLowerCase();
gamestats.playerChoice.push(pickedplayerletter);

//keypress holds the letter.
// playerchoice holds all the keys pressed by the player.

// // if the pickedletter by the computer equals the playerchoice letter that was typed...
// // it will add +1 to the win variable.
// var isDuplicate = false;
// for (var i = 0; i<=9; i++) {
//     if ( pickedletter == playerChoice[i]) {
//         isDuplicate = true;
//         win++;
//         break;
//     }
// }

// document.onkeypress = function(event) {
//     keyPressed =event.key.toLocaleLowerCase;
//     var pickedletter = alphabet[Math.floor(Math.random() * alphabet.length)];
//     if (alphabet.indexOf(keyPressed) > -1) {
//         if (keyPressed === pickedletter) {
//             wins++;
//             numGuessleft = 9;
//             playerChoice [];
//         }
//         if ( keyPressed != pickingletter) {
//             numGuessleft --;
//             playerChoice [];
//         }
//     }
// };