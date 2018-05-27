function setup() {
	//createCanvas(200, 200);
	createCanvas(windowWidth, windowHeight);
	loadJSON("http://api.open-notify.org/astros.json", gotData, "jsonp");
	//http://api.open-notify.org/astros.json

}

function gotData(data) {
	//createElement("p", data);
	background(0);
	for (var i = 0; i < data.number; i++) {
		fill(255);
		ellipse(random(width), random(height),16, 16);
	}
}





/*
function draw() {
	//background(0); //255, 255, 255

}
*/
