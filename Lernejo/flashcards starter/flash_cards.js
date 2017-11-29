var kartoj = [{demando: "Input Device", respondo: "In computing, an input device is a piece of computer hardware equipment used to provide data and control signals to an information processing system such as a computer or information appliance. Examples of input devices include keyboards, mouse, scanners, digital cameras and joysticks."}, {demando: "Output Device", respondo: "In computing, an output device is a piece of computer hardware equipment that uses recieved data and commands from an information processing system (such as a computer or information appliance) in order to perform a task."}, {demando: "Storage Device", respondo: "In computing, a storage device is a piece of computer hardware equipment which is able to store or retrieve digital information in a storage medium"}, {demando: "Primary Storage", respondo: "<i>Primary storage</i> (also known as <i>main memory</i> or <i>internal memory</i>), often referred to simply as <i>memory</i>, is a type of computer data storage which is directly accessible to the cpu."},{demando: "Primary Storage", respondo: "<i>Secondary storage</i> (also known as <i>external memory</i> or <i>auxiliary storage</i>) is a type of computer data storage which is not directly accessible to the cpu."}, {demando: "URL", respondo: "A Uniform Resource Locator (URL), colloquially termed a web address, is a reference to a web resource that specifies its location on a computer network and a mechanism for retrieving it."}, {demando: "Router", respondo: "A router is a networking device that forwards data packets between computer networks."}];

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
