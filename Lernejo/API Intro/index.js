function pokeMon(data) {
    document.getElementById("pokemon").innerHTML = data.abilities[1].ability.name
}
function getAJAX() {
    $.ajax({
	url: "https://pokeapi.co/api/v2/pokemon/1/",
	success: function(data) {
	    pokeMon(data);
	}
    })
}
