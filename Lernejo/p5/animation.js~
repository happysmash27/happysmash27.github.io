var x;
var y;
var yklakŝanĝo = 0;
var rapido = 0;
var akcelo = 0;
var akcelŝanĝo = 0;
var rectWidth = 100;
console.log(window.innerWidth);

function setup() {
    // put setup code here
    createCanvas(windowWidth, windowHeight);
    x = (width/2)-(rectWidth/2);
    y = ((height/2)-(rectWidth/2)) + yklakŝanĝo;
}

function draw() {
    // put drawing code here
    rect(x, y, rectWidth, rectWidth);
    x++;
    if (yklakŝanĝo>0){
	akcelo = akcelo + akcelŝanĝo;
	yklakŝanĝo += rapido;
    }
    y = ((height/2)-(rectWidth/2)) + yklakŝanĝo;
}

function mouseClicked(){
    console.log("mouseClicked()");

    console.log(x);
    console.log(mouseX);
    console.log(x < mouseX < x+rectWidth)
    if (x < mouseX < x+rectWidth  &&  y < mouseY < mouseY+rectWidth){
	rapido = 20;
	akcelo = 5;
	akcelŝanĝo = -1;
    }
}
