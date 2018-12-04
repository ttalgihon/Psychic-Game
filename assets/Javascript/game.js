// The computer will pick a letter from this array
var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p",
"q","r","s","t","u","v","w","x","y","z"];
var win = 0;
var lose = 0;
var numGuessleft = 9;
var playerChoice = [];
// A function that randomly picks a letter from the array and stores it
function pickingletter(alphabet) {
    var pickedletter = alphabet[Math.floor(Math.random()*alphabet.length)];
    console.log(pickedletter);
    return;
}; 
// A player will now also pick a letter from the alphabet
let keyPressed = alphabet;
// doc.onkeyup listens to what key the player presses and activates a function
// The function adds the letter press by the player in an empty array.
document.onkeyup = function (event) {
    keyPressed = event.key.toLowerCase();
    playerChoice.push(keyPressed); 
    document.getElementById("demo").textContent = playerChoice;
    console.log(playerChoice);
    return
}
//keypress holds the letter.
// playerchoice holds all the keys pressed by the player.

// if the pickedletter by the computer equals the playerchoice letter that was typed...
// it will add +1 to the win variable.
var isDuplicate = false;
for (var i = 0; i<=9; i++) {
    if ( pickedletter == playerChoice[i]) {
        isDuplicate = true;
        win++;
        break;
    }
}

document.onkeypress = function(event) {
    keyPressed =event.key.toLocaleLowerCase;
    var pickedletter = alphabet[Math.floor(Math.random() * alphabet.length)];
    if (alphabet.indexOf(keyPressed) > -1) {
        if (keyPressed === pickedletter) {
            wins++;
            numGuessleft = 9;
            playerChoice [];
        }
        if ( keyPressed != pickingletter) {
            numGuessleft --;
            playerChoice [];
        }
    }
};

document.getElementById("winP").textContent = win;
document.getElementById("loseP").textContent = lose;
document.getElementById("guessP").textContent = numGuessleft;
document.getElementById("demo").textContent = playerChoice;