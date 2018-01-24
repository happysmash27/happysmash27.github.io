var vortLeteroj = [];
vortLeteroj = ["F", "O", "F", "A"]
var guessedLetters = [];
for (i in vortLeteroj){
    guessedLetters[i] = "_";
    if (typeof guessedLettersSignoĉeno != "string"){
	var guessedLettersSignoĉeno = guessedLetters[i];
    } else {
	guessedLettersSignoĉeno += ", " + guessedLetters[i];
    }
}
document.getElementById("guessedLetters").innerHTML = guessedLettersSignoĉeno;

function guessLetter(guessedLetter){
    var novaLeteroTrovita = false;
    
    for (i in vortLeteroj){
	if (vortLeteroj[i] == guessedLetter){
	    guessedLetters[i] = guessedLetter;
	    novaLeteroTrovita = true;
	}
    }
    console.log(vortLeteroj);
    var guessedLettersSignoĉeno = null;
    for (i in vortLeteroj){
	if (typeof guessedLettersSignoĉeno != "string"){
	    var guessedLettersSignoĉeno = guessedLetters[i];
	} else {
	    guessedLettersSignoĉeno += ", " + guessedLetters[i];
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
    console.log(guessedLetters);
    if (novaLeteroTrovita){
	var uzantaMesaĝo = "Gratulojn! Vi trovis novan Leteron! ";
	if (!pliDaLeterojPorDiveni){
	    uzantaMesaĝo += "Kaj pli grave, vi venkis!";
	}
    } else {
	var uzantaMesaĝo = "Bedaŭrinde, tiu letero ne estas en la vorto :( ";
    }
    document.getElementById("uzantaMesaĝo").innerHTML = uzantaMesaĝo;
}


