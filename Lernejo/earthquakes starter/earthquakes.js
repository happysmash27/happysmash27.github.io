lingvo = navigator.language

if (lingvo === "en"){
    for (i in document.getElementsByClassName("titolo")){
	document.getElementsByClassName("titolo")[i].innerHTML = "Earthquakes";
    }
    document.getElementById("earthquakeButton").innerHTML = "Earthquakes"
    document.getElementById("PlaarthquakeButton").innerHTML = "More Earthquakes"
} else {
    for (i in document.getElementsByClassName("titolo")){
	document.getElementsByClassName("titolo")[i].innerHTML = "Tertremoj";
    }
    document.getElementById("earthquakeButton").innerHTML = "Tertremoj"
    document.getElementById("PlaarthquakeButton").innerHTML = "Pli da Tertremoj"
}

function displayQuakes(data) {
// this is your "SUCESS FUNCTION"
// this is where you will access and display the returned JSON information

    document.getElementById("earthquakelist").innerHTML = "";
    for (var i=0; i<3; i++){
	var date = new Date(data.features[i].properties.time);
	document.getElementById("earthquakelist").innerHTML += "Magnitude " + data.features[i].properties.mag + ", " + data.features[i].properties.place + " at " + date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + "<br/>";
    }
}

function displayQuakes2(data) {
// this is your "SUCESS FUNCTION"
// this is where you will access and display the returned JSON information

    document.getElementById("earthquakelist").innerHTML = "";
    for (var i=0; i<500; i++){
	var date = new Date(data.features[i].properties.time);
	document.getElementById("earthquakelist").innerHTML += "Magnitude " + data.features[i].properties.mag + ", " + data.features[i].properties.place + " at " + date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + "<br/>";
    }
}


function getAJAX() {
    $.ajax({
	url: 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_day.geojson', // what goes here?
	success: function(data) {
	    displayQuakes(data); // what goes here?
	},
	error: function(){
	    document.getElementById("earthquakelist").innerHTML = "Ne povis akiri datumon el earthquake.usgs.gov. Ĉu vi ebligis skriptojn de ĝi? Se ne, bonvolu ebligi tiun domajnon en via skriptblokilo. NoScript montras nur usgs.gov, kaj ebligi ĝin funkcias bone en si.";
	}
    })
}

function getAJAX2() {
    $.ajax({
	url: 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson', // what goes here?
	success: function(data) {
	    displayQuakes2(data); // what goes here?
	},
	error: function(){
	    document.getElementById("earthquakelist").innerHTML = "Ne povis akiri datumon el earthquake.usgs.gov. Ĉu vi ebligis skriptojn de ĝi? Se ne, bonvolu ebligi tiun domajnon en via skriptblokilo. NoScript montras nur usgs.gov, kaj ebligi ĝin funkcias bone en si.";
	}
    })
}

//console.log("provo 1")
