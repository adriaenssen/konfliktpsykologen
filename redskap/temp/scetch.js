var data;
var knapp;
var rapport;


function setup() {
	noCanvas();
	knapp = select("#knapp").mousePressed(genRapport);
	rapport = select("#rapport");
}

function genRapport(){
	rapport.html("putt dette inn");
}
