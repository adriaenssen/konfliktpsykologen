sigma.classes.graph.addMethod('neighbors', function(nodeId) {
  var k,
      neighbors = {},
      index = this.allNeighborsIndex[nodeId] || {};

  for (k in index)
    neighbors[k] = this.nodesIndex[k];

  return neighbors;
});
// Let's first initialize sigma:
    var s = new sigma('container');

    s.graph.read(bupNett);


    // // Then, let's add some data to display:
    // s.graph.addNode(bupNett.nodes[0]);
    // s.graph.addNode(bupNett.nodes[1]);
    // s.graph.addEdge({
    //   id: 'e0',
    //   // Reference extremities:
    //   source: '0',
    //   target: '33'
    // });


    // s.graph.nodes().forEach(function(n) {
    //   //n.size = 34;
    //   n.color = '#000';
    // });
    //
    // s.graph.edges().forEach(function(e) {
    //   e.color = '';
    // });
    //
    //
    // s.settings({
    //   edgeColor: 'default',
    //   //edgeColor: "#999",
    //   defaultEdgeColor: '#999',
    //   //drawLabels: false,
    //
    //   //hoverd nodes
    //   borderSize: 2
    // });
    s.graph.nodes().forEach(function(n) {
      n.originalColor = n.color;
    });
    s.graph.edges().forEach(function(e) {
      e.originalColor = e.color;
    });
    s.bind('clickNode', function(e) {
      var nodeId = e.data.node.id,
          toKeep = s.graph.neighbors(nodeId);
      toKeep[nodeId] = e.data.node;

      s.graph.nodes().forEach(function(n) {
        if (toKeep[n.id])
          n.color = n.originalColor;
        else
          n.color = '#eee';
      });

      s.graph.edges().forEach(function(e) {
        if (toKeep[e.source] && toKeep[e.target])
          e.color = e.originalColor;
        else
          e.color = '#eee';
      });

      // Since the data has been modified, we need to
      // call the refresh method to make the colors
      // update effective.
      s.refresh();
    });

    // When the stage is clicked, we just color each
    // node and edge with its original color.
    s.bind('clickStage', function(e) {
      s.graph.nodes().forEach(function(n) {
        n.color = n.originalColor;
      });

      s.graph.edges().forEach(function(e) {
        e.color = e.originalColor;
      });

      // Same as in the previous event:
      s.refresh();
    });
    s.refresh();
