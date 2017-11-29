var kartoj = [{demando: "Kio estas bovino?", respondo: "Ina bovo"}, {demando: "Kion bovino diras?", respondo: "Mu"}, {demando: "Kion bovinoj produktas?", respondo: "Lakton"}, {demando: "Kion bovinoj manĝas?", respondo: "Herbon"}];

var demandmontrilo = kartoj.length-1;

var montrasKarton = false;

var kartaTipo = null;

function newCard(){
    montrasKarton = true;
    kartaTipo = "demando";
    document.getElementById("ŝanĝadaButono").innerHTML="Show Answer"
    document.getElementById("ŝanĝadaButono").style.display = "inline";
    document.getElementById("ŝanĝadaButono").style.visibility = "visible";
    if (demandmontrilo<kartoj.length-1){
	demandmontrilo++;
    } else {
	demandmontrilo=0;
    }
    document.getElementById("flash-card").innerHTML=kartoj[demandmontrilo].demando;
}

function showAnswer(){
    if (montrasKarton == true){
	console.log((typeof kartaTipo != "string") || (kartaTipo=="respondo"));
	if ((typeof kartaTipo != "string") || (kartaTipo=="respondo")){
	    document.getElementById("flash-card").innerHTML=kartoj[demandmontrilo].demando;
	    kartaTipo = "demando";
	    document.getElementById("ŝanĝadaButono").innerHTML="Show Answer"
	} else if (kartaTipo == "demando"){
	    document.getElementById("flash-card").innerHTML=kartoj[demandmontrilo].respondo;
	    kartaTipo = "respondo";
	    document.getElementById("ŝanĝadaButono").innerHTML="Show Question"
	} else {
	    document.getElementById("flash-card").innerHTML=kartoj[demandmontrilo].demando;
	    kartaTipo = "demando";
	    document.getElementById("ŝanĝadaButono").innerHTML="Show Answer"
	}
    } else {
	document.getElementById("ŝanĝadaButono").style.display = "none";
	document.getElementById("ŝanĝadaButono").style.visibility = "hidden";
    }
}
