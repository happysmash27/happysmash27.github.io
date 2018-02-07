function displayQuakes(data) {
// this is your "SUCESS FUNCTION"
// this is where you will access and display the returned JSON information

    document.getElementById("earthquakelist").innerHTML = "";
    for (var i=0; i<3; i++){
	var date = new Date(data.features[i].properties.time);
	document.getElementById("earthquakelist").innerHTML += "Magnitude " + data.features[i].properties.mag + ", " + data.features[i].properties.place + " at " + date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds() + "<br/>";
    }
}


function getAJAX() {
    $.ajax({
	url: 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_day.geojson', // what goes here?
	success: function(data) {
	    displayQuakes(data); // what goes here?
	}//,
	//type: "GET"
    })
}

//console.log("provo 1")
