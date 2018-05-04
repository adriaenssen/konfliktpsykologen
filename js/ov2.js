var spot = {
	x: 100,
	y: 50
};

var col = {
	r: 255,
	g: 0,
	b: 0
};

function setup() {
	createCanvas(windowWidth, windowHeight);
	//createCanvas(1000, 1000);
	background(0); //rød, grøn, blå; 255, 255, 255
}

function draw() {
	col.r = random(0,255);
	col.g = random(0, 255);
	col.b = random(0, 255);
	spot.x = random(0, width);
	spot.y = random(0, height);
	noStroke();
	fill(col.r, col.g, col.b, 100);
	ellipse(spot.x, spot.y, 24, 24);
	//console.log(mouseX);
}

function mousePressed() {
	background(0);
}
