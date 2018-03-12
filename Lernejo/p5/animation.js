var x;
var y;
var x2;
var yklakŝanĝo = 0;
var rapido = 0;
var akcelo = 0;
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
    clear();
    x2 = x - width;
    rect(x, y, rectWidth, rectWidth);
    rect(x2, y, rectWidth, rectWidth);
    x++;
    if (yklakŝanĝo<=0){
	rapido += akcelo;
	yklakŝanĝo += rapido;
    }
    if (yklakŝanĝo>0){
	akcelo = 0;
	rapido = 0;
	yklakŝanĝo = 0;
    }
    if (x>width){
	x = 0;
    }
    y = ((height/2)-(rectWidth/2)) + yklakŝanĝo;
}

function mouseClicked(){
    console.log("mouseClicked()");

    console.log(x);
    console.log(mouseX);
    if (((x < mouseX && mouseX < x+rectWidth)||(x2 < mouseX && mouseX < x2+rectWidth))  &&  y < mouseY && mouseY < mouseY+rectWidth){
	console.log(((x < mouseX && mouseX < x+rectWidth)||(x2 < mouseX && mouseX < x2+rectWidth))  &&  y < mouseY && mouseY < mouseY+rectWidth)
	rapido = -3;
	akcelo = 0.1;
    }
}
