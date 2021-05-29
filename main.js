const Astar = require('./astar');
const GraphCreator = require('./graphCreator');

console.log("ciao")

console.log(GraphCreator.createGraph('./esempio/esempio.cnode','./esempio/esempio.cedge'));
var g = GraphCreator.createGraph('./esempio/esempio.cnode','./esempio/esempio.cedge');
g.printGraph();
let vertices = g.getVertices();

console.log(Astar.aStar(vertices[4],vertices[10],g));