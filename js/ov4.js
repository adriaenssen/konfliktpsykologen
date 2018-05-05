function setup() {
	createCanvas(windowWidth, windowHeight);
	//background(0); //255, 255, 255
}

function draw() {
	//fill(255, 0, 0); // rød, grøn, blå
	//stroke('red');
	background(0);
	//stroke(255);
	//strokeWeight(4);
	noStroke();
	//noFill();
	for(var x = 0; x <= width; x += 50){
		for(var y =0; y <= height; y += 50){
			fill(random(255), 0, random(255));
			ellipse(x, y, 25, 25);
		}
	}
}
