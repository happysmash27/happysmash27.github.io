function displayQuakes(data) {
// this is your "SUCESS FUNCTION"
// this is where you will access and display the returned JSON information

    for (var i=0; i<3; i++){
	document.getElementById("earthquakelist").innerHTML+=data.features[i].properties.mag + ", " + data.features[i].properties.place
	console.log(data.features[i].properties.mag + ", " + data.features[i].properties.place)
    }
}


function getAJAX() {
    $.ajax({
	url: 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_day.geojson', // what goes here?
	//data: {
	    //format: 'json'
	//},
	//error: function(textStatus, ajaxOptions, thrownError){
	    //console.log(textStatus);
	    //console.log(textStatus.responseText);
	    //console.log(thrownError);
	    //console.log(thrownError.filename);
	//},
	//dataType: "json",
	success: function(data) {
	    displayQuakes(data); // what goes here?
	}//,
	//type: "GET"
    })
}

//console.log("provo 1")
