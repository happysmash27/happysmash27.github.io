

function makeRequest() {
    $.ajax({
	url: "https://api.apixu.com/v1/current.json?key=6dffcf5b16b24d87bd7191244182602&q=" + document.getElementById("zipcode"), // what goes here?
	success: function(data) {
	    // what goes here?
	    
	}
    })
}
