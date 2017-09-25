console.log("Skripto funkcias");

function showOctopus(){
    if (document.getElementById("octopusFact").style["display"]==none&&document.getElementById("octopusFact").style["visibility"]=="hidden"){
	document.getElementById("octopusFact").style["display"]="inline";
	document.getElementById("octopusFact").style["visibility"]="visible";
	document.getElementById("showOctopus").innerHTML="Hide Octopus Fact"
    } else {
	document.getElementById("octopusFact").style["display"]="none";
	document.getElementById("octopusFact").style["visibility"]="hidden";
	document.getElementById("showOctopus").innerHTML="Show Octopus Fact"
    }
}

function showAnglerfish(){
     if (document.getElementById("anglerfishFact").style["display"]==none&&document.getElementById("anglerfishFact").style["visibility"]=="hidden"){
	document.getElementById("anglerfishFact").style["display"]="inline";
	document.getElementById("anglerfishFact").style["visibility"]="visible";
	document.getElementById("showAnglerfish").innerHTML="Hide Anglerfish Fact"
    } else {
	document.getElementById("anglerfishFact").style["display"]="none";
	document.getElementById("anglerfishFact").style["visibility"]="hidden";
	document.getElementById("showAnglerfish").innerHTML="Show Anglerfish Fact"
    }
}

function showGoblinShark(){
    document.getElementById("goblinSharkFact").style["display"]="inline";
    document.getElementById("goblinSharkFact").style["visibility"]="visible";
}

function showSeaLion(){
    document.getElementById("seaLionFact").style["display"]="inline";
    document.getElementById("seaLionFact").style["visibility"]="visible";
}

function showManatees(){
    document.getElementById("manateesFact").style["display"]="inline";
    document.getElementById("manateesFact").style["visibility"]="visible";
}

function showWalrus(){
    document.getElementById("walrusFact").style["display"]="inline";
    document.getElementById("walrusFact").style["visibility"]="visible";
}
