var x = 1;
var speed = 10;

function setup() {
	createCanvas(windowWidth, windowHeight);
	//background(0); //255, 255, 255
}

function draw() {
	//fill(255, 0, 0); // rød, grøn, blå
	//stroke('red');
	background(0);
	stroke(255);
	strokeWeight(4);
	noFill();
	ellipse(x, 200, 100, 100);
	if(x > width){
		speed = - 10;
	}else if(x < 1){
		speed = 10;
	}
	x = x + speed;
}
