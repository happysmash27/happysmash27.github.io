console.log(window.navigator.language);
teksto=document.getElementById("teksto");
if (window.navigator.language=="en"){
    console.log("en")
    document.documentElement.lang="en"
    enigoj=document.getElementsByTagName("input");
    for(var i = 0; i < enigoj.length; i++){
	if(enigoj[i].type.toLowerCase()=="submit"){
	    enigoj[i].value="Submit";
	    
	}
	else if(enigoj[i].type.toLowerCase()=="text"){
	    if(enigoj[i].className=="substantivo"){
		enigoj[i].placeholder="noun"
	    } else if(enigoj[i].className=="substantivoj"){
		enigoj[i].placeholder="noun (plural)"
	    } else if(enigoj[i].className=="verbo transitiva"){
		enigoj[i].placeholder="verb (transitive)"
	    } else if(enigoj[i].className=="verbo"){
		enigoj[i].placeholder="verb"
	    } else if(enigoj[i].className=="verbo is-tempa transitiva"){
		enigoj[i].placeholder="verb (past tense transitive)"
	    } else if(enigoj[i].className=="verbo is-tempa"){
		enigoj[i].placeholder="verb (past tense)"
	    } else if(enigoj[i].className=="verbo as-tempa transitiva"){
		enigoj[i].placeholder="verb (present tense transitive)"
	    } else if(enigoj[i].className=="verbo as-tempa"){
		enigoj[i].placeholder="verb (present tense)"
	    } else if(enigoj[i].className=="verbo os-tempa transitiva"){
		enigoj[i].placeholder="verb (future tense transitive)"
	    } else if(enigoj[i].className=="verbo os-tempa"){
		enigoj[i].placeholder="verb (future tense)"
	    } else if(enigoj[i].className=="adjektivo"){
		enigoj[i].placeholder="adjective"
	    }
	}
    }
    teksto=document.getElementById("teksto");
    document.getElementById("submetu").onclick=function(event){
	event.preventDefault();
	teksto.innerHTML = "One day, I went outside and saw many "+document.getElementById("adjektivo1").value+", "+document.getElementById("adjektivo2").value+" "+document.getElementById("substantivoj1").value+"! I immediatly "+document.getElementById("verbo1").value+" in order to try and "+document.getElementById("verbo2").value+" them. But it didn't work! Now I'm "+document.getElementById("adjektivo3").value+"!"
    }
} else {
    console.log("Uzas eo");
    teksto=document.getElementById("teksto");
    document.getElementById("submetu").onclick=function(event){
	event.preventDefault();
	teksto.innerHTML = "Unu tago, mi iras ekstere kaj vidis multaj da "+document.getElementById("adjektivo1").value+"jn, "+document.getElementById("adjektivo2").value+"jn "+document.getElementById("substantivoj1").value+"jn! Mi tuje "+document.getElementById("verbo1").value+" por provi "+document.getElementById("verbo2").value+" ilin. Sed ĝi ne funkciis! Nun mi estas "+document.getElementById("adjektivo3").value+"!"
    }
}
