function sigmaInstillinger(){
  // // SKAP EGNE KOMPONENTER I GRAF
  // s.graph.addNode(bupNett.nodes[0]);
  // s.graph.addNode(bupNett.nodes[1]);
  // s.graph.addEdge({
  //   id: 'e0',
  //   // Reference extremities:
  //   source: '0',
  //   target: '33'
  // });

  // EGENDEFINERTE INSTILLINGER
  s.graph.nodes().forEach(function(n) {
    //n.size = 34;
    n.color = '#000';
  });

  s.graph.edges().forEach(function(e) {
    e.color = '';
  });


  s.settings({
    edgeColor: 'default',
    //edgeColor: "#999",
    defaultEdgeColor: '#999',
    //drawLabels: false,

    //hoverd nodes
    borderSize: 2
  });

  
  //StartKnapp = createButton("Start").mousePressed(startAtlas);
  //StoppKnapp = createButton("Stopp").mousePressed(stoppAtlas);
  //s.startForceAtlas2();
  //s.stopForceAtlas2();
}
