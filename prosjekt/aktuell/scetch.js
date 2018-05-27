var data;
var knapp;
var rapport;

function setup() {
	noCanvas();
	knapp = createButton("generer rapport").mousePressed(genRapport);
	rapport = createP("Fyll ut og trykk \"generer\" for å få rapport!");
}

function genRapport(){
	data = {
		li: select("#li").value(),
		of: select("#of").value(),
		tm: select("#tm").value()
	};
	rapport.html(data.li);
}
