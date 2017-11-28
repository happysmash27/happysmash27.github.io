var kartoj = [{demando: "Kio estas bovino?", respondo: "Ina bovo"}, {demando: "Kion bovino diras?", respondo: "Mu"}, {demando: "Kion bovinoj produktas?", respondo: "Lakton"}, {demando: "Kion bovinoj manĝas?", respondo: "Herbon"}];

var demandmontrilo = kartoj.length-1;

function newCard(){
    if (demandmontrilo<kartoj.length-1){
	demandmontrilo++;
    } else {
	demandmontrilo=0;
    }
    document.getElementById("flash-card").innerHTML=kartoj[demandmontrilo].demando;
}

function showAnswer(){
    document.getElementById("flash-card").innerHTML=kartoj[demandmontrilo].respondo;
}
