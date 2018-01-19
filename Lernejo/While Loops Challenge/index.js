function multiply(){
    var table = document.createElement("table");
    viaNumbro = document.getElementById("viaNumbro").value;
    alKiuNumbro = document.getElementById("alKiuNumbro").value;
    for (var i = 0; i<=alKiuNumbro; i++){
	var tr = document.createElement("tr");
	tr.appendChild(document.createTextNode())
    }
}

function problemThree(){
    var table = document.createElement("table")
    var elementID = "problem-three"
    
    for (var i = 5; i<=30; i+=5){
	var tr = document.createElement("tr")
	tr.appendChild(document.createTextNode(i))
	table.appendChild(tr)
    }
    while(document.getElementById(elementID).firstChild){
	document.getElementById(elementID).removeChild(document.getElementById(elementID).firstChild)
    }
    document.getElementById(elementID).appendChild(table)
}
