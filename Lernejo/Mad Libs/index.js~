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
	    } else if(enigoj[i].className=="verbo is-tempo"){
		enigoj[i].placeholder="verb (past tense)"
	    } else if(enigoj[i].className=="verbo as-tempo"){
		enigoj[i].placeholder="verb (present tense)"
	    } else if(enigoj[i].className=="verbo os-tempo"){
		enigoj[i].placeholder="verb (future tense)"
	    } else if(enigoj[i].className=="adjektivo"){
		enigoj[i].placeholder="adjective"
	    }
	}
    }
    teksto=document.getElementById("teksto");
    document.getElementById("submetu").onclick=function(event){
	event.preventDefault();
	teksto.innerHTML = "The "+document.getElementById("adjektivo1").value+" "+document.getElementById("adjektivo2").value+" "+document.getElementById("substantivo1").value+" "+document.getElementById("verbo1").value+" over the "+document.getElementById("adjektivo3").value+" "+document.getElementById("substantivo2").value
    }
} else {
    console.log("Uzas eo");
    teksto=document.getElementById("teksto");
    document.getElementById("submetu").onclick=function(event){
	event.preventDefault();
	teksto.innerHTML = "La "+document.getElementById("adjektivo1").value+" "+document.getElementById("adjektivo2").value+" "+document.getElementById("substantivo1").value+" "+document.getElementById("verbo1").value+" sur la "+document.getElementById("adjektivo3").value+" "+document.getElementById("substantivo2").value
    }
}
