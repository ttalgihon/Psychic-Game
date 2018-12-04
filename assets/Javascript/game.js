// The computer will pick a letter from this array
var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p",
"q","r","s","t","u","v","w","x","y","z"];
// A function that randomly picks a letter from the array and stores it
function pickingletter(alphabet) {
    var pickedletter = alphabet[Math.floor(Math.random()*alphabet.length)];
    console.log(pickedletter); 
};
// A player will now also pick a letter from the alphabet
var array = [];
// This listens to what key the player press and activates a function
document.onkeypress = myfunction ;
// This function adds the letter press by the player in an empty array

// This function will add the value as a string in the <p> of guesses so far
function myfunction () {
    var x = document.getElementById("demo").value;
    document.getElementById("demo").innerHTML = x;
}

