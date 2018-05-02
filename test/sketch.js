var farge = 0;

function setup() {
	//createCanvas(windowWidth, windowHeight);
	createCanvas(1000, 1000);
	background(0, 255, 0); //rød, grøn, blå; 255, 255, 255
}

function draw() {
	background(mouseX/3, mouseY/3, 0); //255, 255, 255

	// Sirkel
	fill(255, 0, 0); // rød, grøn, blå
	//stroke('red');
	strokeWeight(4);
	ellipse(mouseX, mouseY, 55, 55);
	//console.log(mouseX);
}

function mousePressed() {
	background(0, 255, 0);
}
