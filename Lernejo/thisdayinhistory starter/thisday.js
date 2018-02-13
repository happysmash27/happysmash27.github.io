function randomNumber(min,max) {
 return Math.floor(Math.random()*(max-min+1)+min)
}




function getAJAX() {
  $.ajax({
    url: 'http://history.muffinlabs.com/date' // what goes here?
    dataType: 'jsonp',
    success: function(data) {
	// what goes here?
	for (var i = 0; i<3; i++){

	}
    }
  })
}
