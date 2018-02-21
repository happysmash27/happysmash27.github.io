function showMovieInfo(data) {
    // success function: what goes here?
    
}

function makeRequest() {
  $.ajax({
      url: "http://www.omdbapi.com/?apikey=f1bfb9da&t=" + document.getElementById("movietitle").value,// what goes here?
    success: function(data) {
	showMovieInfo(data);// what goes here?
    }
  })
}
