function randomNumber(min,max) {
    return Math.floor(Math.random()*(max-min+1)+min)
}




function getAJAX() {
    $.ajax({
	url: 'http://history.muffinlabs.com/date', // what goes here?
	dataType: 'jsonp',
	success: function(data) {
	    // what goes here?
	    var msg = "<h2>Events</h2>";
	    for (var i = 0; i<3; i++){
	        msg += data.data.Events[i].year + " — " + data.data.Events[i].text + "<br>";
	    }
	    document.getElementById("events").innerHTML = msg;
	    var msg = "<h2>Births</h2>";
	    for (var i = 0; i<3; i++){
	        msg += data.data.Births[i].year + " — " + data.data.Births[i].text + "<br>";
	    }
	    document.getElementById("births").innerHTML = msg;
	    var msg = "<h2>Deaths</h2>";
	    for (var i = 0; i<3; i++){
	        msg += data.data.Deaths[i].year + " — " + data.data.Deaths[i].text + "<br>";
	    }
	    document.getElementById("deaths").innerHTML = msg;
	}
    })
}

function getAJAXevents() {
    $.ajax({
	url: 'http://history.muffinlabs.com/date', // what goes here?
	dataType: 'jsonp',
	success: function(data) {
	    // what goes here?
	    var msg = "<h2>Events</h2>";
	    var uzatajJoj = [];
	    for (var i = 0; i<5; i++){
		if (data.data.Events.length>=5){
		    var bonaJo = false;
		    while (bonaJo === false){
			var j = Math.floor(Math.random()*data.data.Events.length);
			bonaJo = true;
			for (var l in uzatajJoj){
			    if (uzatajJoj[l] === j){
				bonaJo = false;
			    }
			}
		    }
		} else {
		    var j = Math.floor(Math.random()*data.data.Events.length);
		}
		for (var k in data.data.Events[j].links){
		    if (typeof readMoreLinks !== "undefined" && readMoreLinks !== null){
			readMoreLinks += ", ";
		    } else {
			var readMoreLinks = " ";
		    }
		    readMoreLinks += "<a href=\"" + data.data.Events[j].links[k].link + "\">" + data.data.Events[j].links[k].title + "</a>";
		}
		if (readMoreLinks && readMoreLinks !== " " && readMoreLinks !== null){
		    readMoreLinksMessage = " Read more: " + readMoreLinks + ".";
		} else {
		    readMoreLinksMessage = " ";
		}
	        msg += data.data.Events[j].year + " — " + data.data.Events[j].text + readMoreLinksMessage + "<br>";
		readMoreLinksMessage, readMoreLinks = null
	    }
	    document.getElementById("events").innerHTML = msg;
	}
    })
}

function getAJAXbirths() {
    $.ajax({
	url: 'http://history.muffinlabs.com/date', // what goes here?
	dataType: 'jsonp',
	success: function(data) {
	    // what goes here?
	    var msg = "<h2>Births</h2>";
	    var uzatajJoj = [];
	    for (var i = 0; i<5; i++){
		if (data.data.Births.length>=5){
		    var bonaJo = false;
		    while (bonaJo === false){
			var j = Math.floor(Math.random()*data.data.Births.length);
			bonaJo = true;
			for (var l in uzatajJoj){
			    if (uzatajJoj[l] === j){
				bonaJo = false;
			    }
			}
		    }
		} else {
		    var j = Math.floor(Math.random()*data.data.Births.length);
		}
		for (var k in data.data.Births[j].links){
		    if (typeof readMoreLinks !== "undefined" && readMoreLinks !== null){
			readMoreLinks += ", ";
		    } else {
			var readMoreLinks = " ";
		    }
		    readMoreLinks += "<a href=\"" + data.data.Births[j].links[k].link + "\">" + data.data.Births[j].links[k].title + "</a>";
		}
		if (readMoreLinks && readMoreLinks !== " " && readMoreLinks !== null){
		    readMoreLinksMessage = " Read more: " + readMoreLinks + ".";
		} else {
		    readMoreLinksMessage = " ";
		}
	        msg += data.data.Births[j].year + " — " + data.data.Births[j].text + readMoreLinksMessage + "<br>";
		readMoreLinksMessage, readMoreLinks = null
	    }
	    document.getElementById("births").innerHTML = msg;
	}
    })
}

function getAJAXdeaths() {
    $.ajax({
	url: 'http://history.muffinlabs.com/date', // what goes here?
	dataType: 'jsonp',
	success: function(data) {
	    // what goes here?
	    var msg = "<h2>Deaths</h2>";
	    var uzatajJoj = [];
	    for (var i = 0; i<5; i++){
		if (data.data.Deaths.length>=5){
		    var bonaJo = false;
		    while (bonaJo === false){
			var j = Math.floor(Math.random()*data.data.Deaths.length);
			bonaJo = true;
			for (var l in uzatajJoj){
			    if (uzatajJoj[l] === j){
				bonaJo = false;
			    }
			}
		    }
		} else {
		    var j = Math.floor(Math.random()*data.data.Deaths.length);
		}
		for (var k in data.data.Deaths[j].links){
		    if (typeof readMoreLinks !== "undefined" && readMoreLinks !== null){
			readMoreLinks += ", ";
		    } else {
			var readMoreLinks = " ";
		    }
		    readMoreLinks += "<a href=\"" + data.data.Deaths[j].links[k].link + "\">" + data.data.Deaths[j].links[k].title + "</a>";
		}
		if (readMoreLinks && readMoreLinks !== " " && readMoreLinks !== null){
		    readMoreLinksMessage = " Read more: " + readMoreLinks + ".";
		} else {
		    readMoreLinksMessage = " ";
		}
	        msg += data.data.Deaths[j].year + " — " + data.data.Deaths[j].text + readMoreLinksMessage + "<br>";
		readMoreLinksMessage, readMoreLinks = null
	    }
	    document.getElementById("deaths").innerHTML = msg;
	}
    })
}
