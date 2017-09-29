var numGuesses = 0;
var randomNumber = Math.floor(Math.random() * 100 + 1);
var running = true;

function guess(){
    if (running==false){
	reset();
    } else {
	numGuesses += 1;
	var guess = Number(document.getElementById("guess").value);
	if (guess == randomNumber){
	    document.getElementById("counter").innerHTML = "You won in " + numGuesses + " guesses!";
	    running=false;
	} else if (guess > randomNumber){
	    document.getElementById("counter").innerHTML = guess + " is too high. Guesses so far: " + numGuesses;
	} else {
	    document.getElementById("counter").innerHTML = guess + " is too low. Guesses so far: " + numGuesses;
	}
    }
}

function reset(){
    numGuesses = 0;
    randomNumber = Math.floor(Math.random() * 100 + 1);
    document.getElementById("counter").innerHTML="Guesses so far: "+numGuesses;
    document.getElementById("guess").value="";
}
