var x;
var y;
var x2;
var yklakŝanĝo = 0;
var rapido = 0;
var akcelo = 0;
var rectWidth = 100;
var cirklax;
var cirklay;
var cirklax2;
var cirklayklakŝanĝo = 0;
var cirklaRapido = 0;
var cirklaAkcelo = 0;
var cirklaDiametro = 100;
var triangulax1;
var triangulay1;
var triangulax2;
var triangulay2;
var triangulax3;
var triangulay3;
var triangulax12;
var triangulax22;
var triangulax32;
var triangulaRapido;
var triangulayklakŝanĝo = 0;
var triangulaAkcelo;
console.log(window.innerWidth);

function setup() {
    // put setup code here
    createCanvas(windowWidth, windowHeight);
    x = (width/2)-(rectWidth/2);
    y = ((height/2)-(rectWidth/2)) + yklakŝanĝo;
    cirklax = ((x+(rectWidth/2))/2);
    cirklay = (height/2) + cirklayklakŝanĝo;
    triangulax2 = ((x+(rectWidth/2))+width)/2;
    triangulay2 = (height/2)-50 + triangulayklakŝanĝo;
}

function draw() {
    // put drawing code here
    clear();
    console.log("htrawe");
    triangulax1 = triangulax2-(100/2);
    triangulay1 = triangulay2+100;
    triangulax3 = triangulax2+(100/2);
    triangulay3 = triangulay2+100;
    x2 = x - width;
    cirklax2 = cirklax - width;
    triangulax12 = triangulax1 - width;
    triangulax22 = triangulax2 - width;
    triangulax32 = triangulax3 - width;
    rect(x, y, rectWidth, rectWidth);
    rect(x2, y, rectWidth, rectWidth);
    ellipse(cirklax, cirklay, cirklaDiametro);
    ellipse(cirklax2, cirklay, cirklaDiametro);
    triangle(triangulax1, triangulay1, triangulax2, triangulay2, triangulax3, triangulay3);
    triangle(triangulax12, triangulay1, triangulax22, triangulay2, triangulax32, triangulay3);
    x++;
    cirklax++;
    triangulax2++;
    triangulax1 = triangulax2-(100/2);
    triangulax3 = triangulax2+(100/2);
    if (yklakŝanĝo<=0){
	rapido += akcelo;
	yklakŝanĝo += rapido;
    }
    if (cirklayklakŝanĝo<=0){
	cirklaRapido += cirklaAkcelo;
	cirklayklakŝanĝo += cirklaRapido;
    }
    if (triangulayklakŝanĝo<=0){
	triangulaRapido += triangulaAkcelo;
	triangulayklakŝanĝo += triangulaRapido;
    }
    if (yklakŝanĝo>0){
	akcelo = 0;
	rapido = 0;
	yklakŝanĝo = 0;
    }
    if (cirklayklakŝanĝo>0){
	cirklaAkcelo = 0;
	cirklaRapido = 0;
	cirklayklakŝanĝo = 0;
    }
    if (triangulayklakŝanĝo>0){
	akcelotriangulaAkcelo = 0;
	triangulaRapido = 0;
	triangulayklakŝanĝo = 0;
    }
    if (x > width){
	x = 0;
    }
    if (cirklax-(cirklaDiametro/2) > width){
	cirklax = cirklaDiametro/2;
    }
    if (triangulax1 > width){
	triangulax2 = 0 + 100/2;
	triangulax1 = triangulax2-(100/2);
	triangulax3 = triangulax2+(100/2);
    }
    y = ((height/2)-(cirklaDiametro/2)) + yklakŝanĝo;
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
