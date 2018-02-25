function showMovieInfo(data) {
    // success function: what goes here?
    
    var movieinfo = document.getElementById("movieinfo")
    movieinfo.style="display:flex; padding:0px; ";
    while (movieinfo.firstChild){
	movieinfo.removeChild(movieinfo.firstChild);
    }
    
    var movieinfoimgdiv = document.createElement("div");
    movieinfoimgdiv.style = "height:100%;";
    var movieinfoimg = document.createElement("img");
    movieinfoimg.src = data.Poster;
    movieinfoimgdiv.appendChild(movieinfoimg);

    var movieinfoinfo = document.createElement("div");

    
    var movieinfoheader = document.createElement("div");
    
    var movieinfoheadertitle = document.createElement("h1");
    movieinfoheadertitle.style="margin:0px"
    movieinfoheadertitle.innerHTML = data.Title;

    var movieinfoheaderinfo = document.createElement("h4");
    //movieinfoheaderdate.style="font-weight:bold; margin:0px;";
    movieinfoheaderinfo.style="margin:0px;";
    movieinfoheaderinfo.innerHTML = "Released " + data.Released + ", Runtime " + data.Runtime;
    var movieinfoheaderinfo2 = document.createElement("h4");
    movieinfoheaderinfo2.style="margin:0px;";
    movieinfoheaderinfo2.innerHTML = "Genre: " + data.Genre;

    movieinfoheader.appendChild(movieinfoheadertitle);
    movieinfoheader.appendChild(movieinfoheaderinfo);
    movieinfoheader.appendChild(movieinfoheaderinfo2);

    
    var movieinfoinfodescriptiondiv = document.createElement("div");
    var movieinfoinfodescriptiondivp = document.createElement("p");
    movieinfoinfodescriptiondivp.innerHTML = data.Plot;
    movieinfoinfodescriptiondiv.appendChild(movieinfoinfodescriptiondivp)
    movieinfoinfo.appendChild(movieinfoinfodescriptiondiv)

    var movieinfoinfoinfodiv = document.createElement("div");
    var movieinfoinfoinfopeople = document.createElement("div");
    var movieinfoinfoinfometadata = document.createElement("div");
    movieinfoinfoinfometadata.style = "margin:0.4em 0em;"
    var writers = document.createElement("p");
    writers.innerHTML = "Writers: " + data.Writer;
    var directors = document.createElement("p");
    directors.innerHTML = "Directors: " + data.Director;
    var actors = document.createElement("p");
    actors.innerHTML = "Actors: " + data.Actors;
    writers.style = "margin:0px;";
    directors.style = "margin:0px;";
    actors.style = "margin:0px;";
    movieinfoinfoinfopeople.appendChild(writers);
    movieinfoinfoinfopeople.appendChild(directors);
    movieinfoinfoinfopeople.appendChild(actors);
    var movieinfoinfoinfometadatalanguage = document.createElement("p");
    movieinfoinfoinfometadatalanguage.style = "margin:0px;";
    movieinfoinfoinfometadatalanguage.innerHTML = "Language: " + data.Language;
    var movieinfoinfoinfometadataawards = document.createElement("p");
    movieinfoinfoinfometadataawards.style = "margin:0px;";
    movieinfoinfoinfometadataawards.innerHTML = "Awards:" + data.Awards;
    movieinfoinfoinfometadata.appendChild(movieinfoinfoinfometadatalanguage);
    movieinfoinfoinfometadata.appendChild(movieinfoinfoinfometadataawards);
    movieinfoinfoinfodiv.appendChild(movieinfoinfoinfopeople);
    movieinfoinfoinfodiv.appendChild(movieinfoinfoinfometadata);

    var movieinforight = document.createElement("div")
    movieinforight.style = "margin: 0px 1em";
    movieinforight.appendChild(movieinfoheader);
    movieinforight.appendChild(movieinfoinfo);
    movieinforight.appendChild(movieinfoinfoinfodiv);

    movieinfo.appendChild(movieinfoimgdiv);
    movieinfo.appendChild(movieinforight);
    
    console.log("showedMovieInfo")
}

function makeRequest() {
    $.ajax({
	//url: ("http://www.omdbapi.com/?apikey=f1bfb9da&t=" + document.getElementById("movietitle").value + "&i=" + document.getElementById("imdbid").value),// what goes here?
	url: ("http://www.omdbapi.com/?apikey=f1bfb9da&i=" + document.getElementById("movietitle").value),// what goes here?
	success: function(data) {
	    console.log(data);
	    if (String(data.Response).toUpperCase() !== String(false).toUpperCase()){
		showMovieInfo(data);
	    } else {
		$.ajax({
		    url: ("http://www.omdbapi.com/?apikey=f1bfb9da&t=" + document.getElementById("movietitle").value),// what goes here?
		    success: function(data) {
			if (String(data.Response).toUpperCase() !== String(false).toUpperCase()){
			    showMovieInfo(data);
			} else {
			    var movieinfo = document.getElementById("movieinfo");
			    movieinfo.style="";
			    while (movieinfo.firstChild){
				movieinfo.removeChild(movieinfo.firstChild);
			    }
			    var errorh1 = document.createElement("h1")
			    errorh1.innerHTML = "Error: Could not acquire data"
			    var errorp = document.createElement("p");
			    errorp.innerHTML = "The data for this film could not be loaded. Either omdbapi is innaccessible, or this film is not in their database under the inputed name or id."
			    movieinfo.appendChild(errorh1);
			    movieinfo.appendChild(errorp);
			}// what goes here?
		    }
		})
	    }// what goes here?
	}
    })
}
