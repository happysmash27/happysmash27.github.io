console.log(window.navigator.language);
teksto=document.getElementById("teksto");
if (window.navigator.language=="en"||true){
    console.log("en")
    submetoj=document.getElementsByTagName("input");
    for(var i = 0; i < submetoj.length; i++){
	if(submetoj[i].type.toLowerCase()=="submit"){
	    submetoj[i].value="Submit";
	}
    }
} else {
    console.log("Uzas eo");
    teksto=document.getElementById("teksto");
}
