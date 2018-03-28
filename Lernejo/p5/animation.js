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
var triangulax;
var triangulay;
var triangulaRapido = 0;
var triangulayklakŝanĝo = 0;
var triangulaAkcelo = 0;
console.log(window.innerWidth);

function setup() {
    // put setup code here
    createCanvas(windowWidth, windowHeight);
    x = (width/2)-(rectWidth/2);
    y = ((height/2)-(rectWidth/2)) + yklakŝanĝo;
    
    cirklax = (((x+(rectWidth/2)))/2);
    cirklay = (height/2) + cirklayklakŝanĝo;
    
    triangulax = ((x+(rectWidth/2))+width)/2;
    triangulay = (height/2) + triangulayklakŝanĝo;
}

function draw() {
    // put drawing code here
    clear();
    x2 = x - width;
    cirklax2 = cirklax - width;
    rect(x, y, rectWidth, rectWidth);
    rect(x2, y, rectWidth, rectWidth);
    
    ellipse(cirklax, cirklay+cirklayklakŝanĝo, cirklaDiametro);
    ellipse(cirklax2, cirklay+cirklayklakŝanĝo, cirklaDiametro);
    
    beginShape();
    vertex(createVector(triangulax-50, triangulay+50+triangulayklakŝanĝo).x, createVector(triangulax-50, triangulay+50+triangulayklakŝanĝo).y);
    vertex(createVector(triangulax, triangulay-50+triangulayklakŝanĝo).x, createVector(triangulax, triangulay-50+triangulayklakŝanĝo).y);
    vertex(createVector(triangulax+50, triangulay+50+triangulayklakŝanĝo).x, createVector(triangulax+50, triangulay+50+triangulayklakŝanĝo).y);
    endShape(CLOSE);
    beginShape();
    vertex(createVector(triangulax-50-width, triangulay+50+triangulayklakŝanĝo).x, createVector(triangulax-50-width, triangulay+50+triangulayklakŝanĝo).y);
    vertex(createVector(triangulax-width, triangulay-50+triangulayklakŝanĝo).x, createVector(triangulax-width, triangulay-50+triangulayklakŝanĝo).y);
    vertex(createVector(triangulax+50-width, triangulay+50+triangulayklakŝanĝo).x, createVector(triangulax+50-width, triangulay+50+triangulayklakŝanĝo).y);
    endShape(CLOSE);
    //triangle(triangulax-50, triangulay+50, triangulax, triangulay-50, triangulax+50, triangulay+50);
    //triangle(triangulax12, triangulay1, triangulax22, triangulay2, triangulax32, triangulay3);
    x++;
    cirklax++;
    triangulax++;
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
    if (triangulax-50 > width){
	triangulax = 0 + 100/2;
    }
    y = ((height/2)-(cirklaDiametro/2)) + yklakŝanĝo;
}

function mouseClicked(){
    console.log("mouseClicked()");

    console.log(x);
    console.log(mouseX);
    if (((x < mouseX && mouseX < x+rectWidth)||(x2 < mouseX && mouseX < x2+rectWidth))  &&  y+yklakŝanĝo < mouseY && mouseY < y+rectWidth+yklakŝanĝo){
	rapido = -3;
	akcelo = 0.1;
    }

    if (collidePointCircle(mouseX, mouseY, cirklax, cirklay+cirklayklakŝanĝo, cirklaDiametro) || collidePointCircle(mouseX, mouseY, cirklax2, cirklay+cirklayklakŝanĝo, cirklaDiametro)){
	console.log(true);
	cirklaRapido = -3;
	cirklaAkcelo = 0.1;
    }

    if (collidePointPoly(mouseX, mouseY, [createVector(triangulax-50, triangulay+50+triangulayklakŝanĝo), createVector(triangulax, triangulay-50+triangulayklakŝanĝo), createVector(triangulax+50, triangulay+50+triangulayklakŝanĝo)]) || collidePointPoly(mouseX, mouseY, [createVector(triangulax-50-width, triangulay+50+triangulayklakŝanĝo), createVector(triangulax-width, triangulay-50+triangulayklakŝanĝo), createVector(triangulax+50-width, triangulay+50+triangulayklakŝanĝo)])){
	console.log(true);
	triangulaRapido = -3;
	triangulaAkcelo = 0.1;
    }
}
