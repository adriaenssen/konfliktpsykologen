var skarUt;
var knapp;
var rapport;

function setup() {
	noCanvas();
	knapp = select("#knapp").mousePressed(hentRapport);
	rapport = select("#rapport");
}
