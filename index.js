window.onload = (function() {
    //Do nothing
});

function demoStyle(){
    document.getElementById('Inspired').pause();
    document.getElementById('Motivator').play();
    document.getElementById("pageStyle").setAttribute("href", "democrat.css");
}

function repubStyle(){
    document.getElementById('Inspired').pause();
    document.getElementById('Presenterator').play();
    document.getElementById("pageStyle").setAttribute("href", "republican.css");
}

function liberStyle(){
    // alert("What?! There couldn't possibly be a *third* political party in the United States! Or fourth. Or fifth...");
    document.getElementById('Impossible').play();
}
