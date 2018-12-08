// This is a for-loop that contains the alphabet in lower case. (works)
let alphabet = "";
for (let i = 97; i <= 122; i++) {
    alphabet += String.fromCharCode(i)
    // A variable that randomly picks a letter from var 'alphabet' for the computer.  
};
var pickedcomputerletter = alphabet[Math.floor(Math.random()*alphabet.length)];

let pickedPlayerLetter;
document.onkeyup = function storingpressedkey(letter) {
    pickedPlayerLetter = letter.key.toLowerCase();
    if (pickedcomputerletter === pickedPlayerLetter) {
        gamestats.win++;
        gamestats['playerChoice'] = pickedPlayerLetter;
        console.log(pickedPlayerLetter);
        document.getElementById("winP").textContent = gamestats.win;
        
    } 
    if (pickedcomputerletter !== pickedPlayerLetter) {
        gamestats.lose++;
        gamestats.numGuessleft--;
        gamestats.playerChoice.push(pickedPlayerLetter);  
        console.log(pickedPlayerLetter);
        document.getElementById("loseP").textContent = gamestats.lose;
 
    }
    if (gamestats.numGuessleft === 0) {
        gamestats.win = 0;
        gamestats.lose = 0;
        gamestats.numGuessleft = 5;
        gamestats.playerChoice = [''];
        pickedcomputerletter = pickedcomputerletter;
        
    }
    document.getElementById("guessP").textContent = gamestats.numGuessleft;
    document.getElementById("demo").textContent = gamestats.playerChoice;  
};

// Create an object
var gamestats = {
    win: 0,
    lose: 0,
    numGuessleft: 5,
    playerChoice: [""],
};

log = console.log;
log(alphabet);
log(pickedcomputerletter);
log(gamestats);
