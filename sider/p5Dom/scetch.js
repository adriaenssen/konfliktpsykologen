var canvas;
var p1;
var p2;
var h2;
var x = 200;
var y = 200;
var knapp;
var slider;
var inp;
var nameP;
var text;

function setup() {
	p1 = createP("Dette er en javascript paragraf");
	h2 = createElement("h2", "Hva skjer nå?");
	canvas = createCanvas(600, 400);
	//canvas.position(200, 200);
	nameP = createP("Ditt navn");
	//under = createP()
	knapp = createButton("knapp");
	stilKnapp = createButton("stil");
	slider = createSlider(0, 100, 50); // min, max, start
	inp = createInput("navn?");
	knapp.mousePressed(jsP);
	nameP.mouseOver(overName);
	nameP.mouseOut(outName);
	stilKnapp.mousePressed(stilTilbake);
	inp.changed(updateText);

	nameP.style("color", "black");
}

function stilTilbake(){

}

function jsP(){
	h2.html("Dette skjer nå!!");
	p2 = createP("Js paragraf test.");
}

function updateText() {
	nameP.html(inp.value());
	//text.html()
}

function overName(){
	nameP.html("Musen er over meg");
}

function outName(){
	nameP.html("Musen er borte");
}

function draw() {
	//clear(); //
	background(100); //255, 255, 255
	fill(255, 0, 175);
	ellipse(x,y,slider.value(), slider.value());
	text("Dette er en p5 text",200,300);
	h2.position(x, y);
	x = x + random(-5,5);
	text(inp.value(), 10, 20);
}
