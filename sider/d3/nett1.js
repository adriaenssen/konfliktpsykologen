/* global d3 */

var graph = {
  nodes: [
    {name: "Dagny", age: 35},
    {name: "Ida", age: 26},
    {name: "Daniel", age: 36},
    {name: "Signe", age: 39},
    {name: "Isak", age: 35},
    {name: "Milo", age: 11},
  ]
};

var canvas = d3.select("#network"),
  width = canvas.attr("width"),
  height = canvas.attr("height"),
  r = 20,
  ctx = canvas.node().getContext("2d"),
  simulation = d3.forceSimulation()
    .force("x", d3.forceX(width/2))
    .force("y", d3.forceY(height/2))
    .force("collide", d3.forceCollide(r))
    .on("tick", update);

//graph.nodes.forEach(function (d){
//  d.x = Math.random() * width;
//  d.y = Math.random() * height;
//});

simulation.nodes(graph.nodes);

function update(){
  ctx.clearRect(0, 0, width, height);

  ctx.beginPath();
  graph.nodes.forEach(drawNode);
  ctx.fill();
}

function drawNode(d){
  ctx.moveTo(d.x, d.y);
  ctx.arc(d.x, d.y, r, 0, 2 * Math.PI);
}
update();
