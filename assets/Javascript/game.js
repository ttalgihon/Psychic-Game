// This is a for-loop that contains the alphabet in lower case. (works)
let alphabet = "";
for (let i = 97; i <= 122; i++) {
    alphabet += String.fromCharCode(i)
    // A variable that randomly picks a letter from var 'alphabet' for the computer.  
};
var pickedcomputerletter = alphabet[Math.floor(Math.random()*alphabet.length)];
console.log(alphabet);
console.log(pickedcomputerletter);

// Create an object
var gamestats = {
    win: 0,
    lose: 0,
    numGuessleft: 9,
    playerChoice: [""],
};
//Display the object gamestats data in the html.
console.log(gamestats);
console.log(gamestats.win); 
document.getElementById("winP").innerHTML = gamestats.win;
document.getElementById("loseP").textContent = gamestats.lose;
document.getElementById("guessP").textContent = gamestats.numGuessleft;
document.getElementById("demo").textContent = gamestats.playerChoice;

// A variable that holds the letter pressed by the player in lower case then,
// pushed that letter into an array called playerchoices.

// let pickedplayerletter = document.onkeypress.toLowerCase();
// gamestats.playerChoice.push(pickedplayerletter);
// console.log(pickedplayerletter);

let pickedPlayerLetter;
document.onkeyup = function storingpressedkey(letter) {
    pickedPlayerLetter = letter.key.toLowerCase();
    if (pickedcomputerletter === pickedPlayerLetter && gamestats.numGuessleft != 0) {
        gamestats.win++;
        
    } else {
        gamestats.lose++;
        gamestats.numGuessleft--;
        gamestats['playerChoice']= pickedPlayerLetter;    
    };
    
};

// if pickedplayer letter is = to computerpicked letter
//THEN it will change win by ++
// if they do NOT = 
//THEN take away from guessesleft -- by one and put the playerpicked letter in the playerchoice array. 