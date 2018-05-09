var graph = {
  nodes: [
    {name: "Dagny", age: 35},
    {name: "Ida", age: 26},
    {name: "Daniel", age: 36},
    {name: "Signe", age: 39},
    {name: "Isak", age: 35},
    {name: "Milo", age: 11}
  ],
  links: [
    {source: "Dagny", target: "Milo"},
    {source: "Dagny", target: "Signe"},
    {source: "Ida", target: "Signe"},
    {source: "Milo", target: "Daniel"},
    {source: "Isak", target: "Milo"},
    {source: "Isak", target: "Daniel"},
  ]
};
