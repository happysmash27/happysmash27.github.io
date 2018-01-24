var vortLeteroj = [];
var guessedLetters = [];
for (i in vortLeteroj){
    guessedLetters[i] = "_";
}

function guessLetter(guessedLetter){
    var novaLeteroTrovita = false;
    
    for (i in vortLeteroj){
	if (vortLeteroj[i] == guessedLetter){
	    guessedLetters[i] = guessedLetter;
	    novaLeteroTrovita = true;
	}
    }
    for (i in vortLeteroj){
	if (vortLeteroj[i] == "_"){
	    var pliDaLeterojPorDiveni = true;
	    break;
	} else if (i == vortleteroj.length - 1 && vortLeteroj[i] != "_"){
	    console.log(i + ", " + vortleteroj[i]);
	    var pliDaLeterojPorDiveni = false;
	}
    }
    console.log(guessedLetters);
    if (novaLeteroTrovita){
	alert("Gratulojn! Vi trovis novan leteron!");
	console.log("Gratulojn! Vi trovis novan leteron!");
	if (!pliDaLeterojPorDiveni){
	    alert("Gratulojn! Vi venkos!");
	    console.log("Gratulojn! Vi venkos!");
	}
    }
}
