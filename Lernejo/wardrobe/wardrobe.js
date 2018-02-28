var lingvo = navigator.language;
if (lingvo === "eo"){
    for (i in document.getElementsByClassName("titolo")){
	document.getElementsByClassName("titolo")[i].innerHTML = "Veter-bazita Vestaĵkonsilanto";
    }
    document.getElementById("zipcode").placeholder = "Nomo de la urbo, poŝtkodo, latitudo kaj longitudo, aŭ IP-adreso";
    document.getElementById("submetu").innerHTML = "Konsili Min!";
} else if (lingvo === "en") {
    for (i in document.getElementsByClassName("titolo")){
	document.getElementsByClassName("titolo")[i].innerHTML = "Weather-based Outfit Advisor";
    }
    document.getElementById("zipcode").placeholder = "City name or postal code";
    document.getElementById("submetu").innerHTML = "Advise Me!";
} else {
    for (i in document.getElementsByClassName("titolo")){
	document.getElementsByClassName("titolo")[i].innerHTML = "Veter-bazita Vestaĵkonsilanto";
    }
    document.getElementById("zipcode").placeholder = "Nomo de la urbo, poŝtkodo, latitudo kaj longitudo, aŭ IP-adreso";
    document.getElementById("submetu").innerHTML = "Konsili Min!";
}

function makeRequest() {
    $.ajax({
	url: "https://api.apixu.com/v1/current.json?key=6dffcf5b16b24d87bd7191244182602&q=" + document.getElementById("zipcode"), // what goes here?
	success: function(data) {
	    // what goes here?
	    
	}
    })
}
