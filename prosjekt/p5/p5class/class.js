let bubble1;
let bubble2;

function setup() {
	//createCanvas(600, 400);
	createCanvas(windowWidth, windowHeight);
	bubble1 = new Bubble(200, 200, 40);
	bubble2 = new Bubble(400, 200, 20);
	//print(bubble.x, bubble.y);
}

function draw() {
	background(0); //255, 255, 255
	bubble1.move();
	bubble1.show();
	bubble2.move();
	bubble2.show();
}

class Bubble {
	constructor(x, y, r) {
		this.x = x;
		this.y = y;
		this.r = r;
	}
	move() {
		this.x = this.x + random(-5, 5);
		this.y = this.y + random(-5, 5);
	}
	show() {
		stroke(255);
		strokeWeight(4);
		noFill();
		ellipse(this.x, this.y, this.r*2);
	}
}
