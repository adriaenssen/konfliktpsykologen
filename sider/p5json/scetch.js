var flower;

function preload(){
	flower = loadJSON("nett.json");
}

function setup() {
	//createCanvas(600, 400);
	createCanvas(windowWidth, windowHeight);

}

function draw() {
	background(0); //255, 255, 255

	fill(flower.r, flower.g, flower.b);
	text(flower.name, 10, 50);

}
