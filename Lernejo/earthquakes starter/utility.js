var lingvo = navigator.language

function random(min,max) {
 return Math.floor(Math.random()*(max-min+1)+min);
}

function showDate() {
    var date = new Date()
    if (lingvo === "en"){
	var month = date.toLocaleString("en-us", { month: "long" })
    } else {
	var month = date.toLocaleString("eo", { month: "long" })
    }
  var day = date.getDate()

    if (lingvo === "en"){
	document.getElementById("todaysdate").innerHTML = " ~ " + month + " " + day + " ~ "
    } else {
	document.getElementById("todaysdate").innerHTML = " ~ " + day + "-a de " + month + " ~ "
    }
}

showDate()
