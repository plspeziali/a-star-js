const Graph = require('./graph');
const Vertex = require('./vertex');
const Astar = require('./astar');

console.log("ciao")
v = {id: 1, x: 10, y: 5};

// Using the above implemented graph class
var g = new Graph();
var vertices = [];
// adding vertices
for (var i = 0; i < 6; i++) {
    vertices.push(new Vertex(i,i*10,i*25));
    g.addVertex(vertices[i]);
}
  
// adding edges
g.addEdge(vertices[0], vertices[1],15);
g.addEdge(vertices[0], vertices[3],26);
g.addEdge(vertices[0], vertices[4],14);
g.addEdge(vertices[1], vertices[3],14);
g.addEdge(vertices[3], vertices[2],27);
g.addEdge(vertices[4], vertices[5],18);
g.addEdge(vertices[4], vertices[3],24);
g.addEdge(vertices[3], vertices[5],22);
  
// prints all vertex and
// its adjacency list
// A -> B D E
// B -> A C
// C -> B E F
// D -> A E
// E -> A D F C
// F -> E C
g.printGraph();

console.log(Astar.aStar(vertices[0],vertices[5],g));