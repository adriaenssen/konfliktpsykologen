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
	fill(col.r, col.g, col.b)
	ellipse(spot.x, spot.y, 24, 24);
	//console.log(mouseX);
}
