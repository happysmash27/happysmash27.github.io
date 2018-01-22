function multiply(){
    var elementID = "respondo"
    var table = document.createElement("table");
    viaNumbro = document.getElementById("viaNumbro").value;
    alKiuNumbro = document.getElementById("alKiuNumbro").value;
    for (var i = 1; i<=alKiuNumbro; i++){
	var tr = document.createElement("tr");
	tr.appendChild(document.createTextNode(i + " x " + viaNumbro + " = " + (i*viaNumbro)));
	table.appendChild(tr);
    }
    while(document.getElementById(elementID).firstChild){
	document.getElementById(elementID).removeChild(document.getElementById(elementID).firstChild);
    }
    document.getElementById(elementID).appendChild(table);
}
