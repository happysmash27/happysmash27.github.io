var lingvo = navigator.language;
var vortLeteroj = [];
vortLeteroj = ["F", "O", "F", "A"]
var guessedLetters = [];
for (i in vortLeteroj){
    guessedLetters[i] = "_";
    if (typeof guessedLettersSignoĉeno != "string"){
	var guessedLettersSignoĉeno = guessedLetters[i].toUpperCase();
    } else {
	guessedLettersSignoĉeno += ", " + guessedLetters[i].toUpperCase();
    }
}

if (lingvo == "en"){
    for (i in document.getElementsByClassName("titolo")){
	document.getElementsByClassName("titolo")[i].innerHTML = "Word Guesser";
    }
    document.getElementById("respondi").name = "Answer";
    document.getElementById("respondi").innerHTML = "Answer";
    document.getElementById("letterGuess").placeholder = "Guess Your Letter";
} else {
    for (i in document.getElementsByClassName("titolo")){
	document.getElementsByClassName("titolo")[i].innerHTML = "Divini Vortojn";
    }
    document.getElementById("respondi").name = "Respondi";
    document.getElementById("respondi").innerHTML = "Respondi";
    document.getElementById("letterGuess").placeholder = "Divini Vian Leteron";
}
    
document.getElementById("guessedLetters").innerHTML = guessedLettersSignoĉeno;
var jamVenkis = false;

function guessLetter(guessedLetter){
    var novaLeteroTrovita = false;

    if (guessedLetter.length > 1){
	if (lingvo === "en"){
	    document.getElementById("uzantaMesaĝo").innerHTML = "Input is not a letter";
	} else {
	    document.getElementById("uzantaMesaĝo").innerHTML = "Tio ne estas letero :P !";
	}
	return;
    }
    
    for (i in vortLeteroj){
	if (vortLeteroj[i].toUpperCase() === guessedLetter.toUpperCase()){
	    guessedLetters[i] = guessedLetter;
	    novaLeteroTrovita = true;
	}
    }
    console.log(vortLeteroj);
    var guessedLettersSignoĉeno = null;
    for (i in vortLeteroj){
	if (typeof guessedLettersSignoĉeno != "string"){
	    var guessedLettersSignoĉeno = guessedLetters[i].toUpperCase();
	} else {
	    guessedLettersSignoĉeno += ", " + guessedLetters[i].toUpperCase();
	}
    }
    document.getElementById("guessedLetters").innerHTML = guessedLettersSignoĉeno;
    for (i in vortLeteroj){
	if (guessedLetters[i] == "_"){
	    var pliDaLeterojPorDiveni = true;
	    break;
	} else if (i == vortLeteroj.length - 1 && vortLeteroj[i] != "_"){
	    var pliDaLeterojPorDiveni = false;
	}
    }
    if (jamVenkis){
	if (lingvo == "en"){
	    var uzantaMesaĝo = "You don't need to guess anymore, as you already won!";
	} else {
	    var uzantaMesaĝo = "Vi ne devas divini, ĉar vi jam venkis :)";
	}
	document.getElementById("uzantaMesaĝo").innerHTML = uzantaMesaĝo;
	return;
    }
    console.log(guessedLetters);
    if (novaLeteroTrovita){
	if (lingvo == "en"){
	    var uzantaMesaĝo = "Congratulations! You found a new letter! ";
	} else {
	    var uzantaMesaĝo = "Gratulojn! Vi trovis novan Leteron :) ! ";
	}
	if (!pliDaLeterojPorDiveni){
	    if (lingvo == "en"){
		uzantaMesaĝo += "And more importantly, you won!";
	    } else {
		uzantaMesaĝo += "Kaj pli grave, vi venkis :D !";
	    }
	    jamVenkis = true;
	}
    } else {
	if (!pliDaLeterojPorDiveni){
	    if (lingvo == "en"){
		var uzantaMesaĝo = "You don't need to guess anymore, as you already won!";
	    } else {
		var uzantaMesaĝo = "Vi ne devas divini, ĉar vi jam venkis :)";
	    }
	} else {
	    if (lingvo == "en"){
		var uzantaMesaĝo = "Oh no! That's not right!";
	    } else {
		var uzantaMesaĝo = "Bedaŭrinde, tiu letero ne estas en la vorto :( ";
	    }
	}
    }
    document.getElementById("uzantaMesaĝo").innerHTML = uzantaMesaĝo;
}

