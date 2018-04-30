function setup() {
	createCanvas(windowWidth, windowHeight);
	//createCanvas(1000, 1000);
}

function draw() {
	background(0, 255, 0); //255, 255, 255

	// Rektangel
	fill(255, 204, 0,100); // rød, grøn, blå
	stroke('red');
	strokeWeight(4);
	rect(300,200,75,150);

	// Linje
	fill(255, 204, 0); // rød, grøn, blå
	stroke('red');
	strokeWeight(4);
	line(400,200,100,500);

	// Sirkel
	fill(255, 204, 0); // rød, grøn, blå
	stroke('red');
	strokeWeight(4);
	ellipse(56, 46, 55, 55);
	//console.log(mouseX);

	//Dette er endret nå

}
