
klikkForb();

// INITIERER SIGMA OG HENT/SKAP GRAF
var s = new sigma('container');

s.graph.read(bupNett);


sigmaInstillinger();

klikkInst();

// HENTER GRAF
s.refresh();
