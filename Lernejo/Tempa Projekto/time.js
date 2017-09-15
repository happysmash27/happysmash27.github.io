function tempo(){
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds(); 
    var suffix = "AM";
    if (seconds < 10){
      	seconds = "0" + seconds;
    }
    if (minutes < 10){
        minutes = "0" + minutes;
    }
    if (hours >= 12) {
        suffix = "PM";
  	hours = hours - 12;
    }
    if (hours == 0) {
  	hours = 12;
    }
    document.getElementById("d1").innerHTML = hours + ":" + minutes + ":" + seconds + " " + suffix +", "+currentTime.getDay()+"/"+currentTime.getMonth()+"/"+currentTime.getFullYear();

    //setInterval(tempo,1000);
    console.log("Interval set");
}
setInterval(tempo,1000);
