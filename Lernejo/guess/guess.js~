var numGuesses = 0;
var randomNumber = Math.floor(Math.random() * 100 + 1);

function guess(){
    numGuesses += 1;
    var guess = Number(document.getElementById("guess").value);
    if (guess == randomNumber){
	document.getElementById("counter").innerHTML = "You won in " + numGuesses + " guesses!";
    } else if (guess > randomNumber){
	document.getElementById("counter").innerHTML = guess + " is too high. Guesses so far: " + numGuesses;
    } else {
	document.getElementById("counter").innerHTML = guess + " is too low. Guesses so far: " + numGuesses;
    }
}
