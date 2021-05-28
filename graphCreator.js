const readline = require('readline');
const fs = require('fs');

module.exports = {
    
    createGraph(){
        const readInterface = readline.createInterface({
            input: fs.createReadStream('/esempio.cnode'),
            output: process.stdout,
            console: false
        });

        var g = new Graph();
        var vertices = [];
        // adding vertices
        readInterface.on('line', function(line) {
            let info = line.split(" "); // Prendo le informanzioni di ogni nodo
            let newVertex = new Vertex(info[0],info[1],info[2]);
            vertices.push(newVertex);
            g.addVertex(newVertex);
        });

        const readInterface = readline.createInterface({
            input: fs.createReadStream('/esempio.cedge'),
            output: process.stdout,
            console: false
        });
        
        readInterface.on('line', function(line) {
            let info = line.split(" "); // Prendo le informanzioni di ogni vertice
            let firstNode = parseInt(info[1]);
            let secondNode = parseInt(info[2]);
            g.addEdge(vertices[firstNode], vertices[2],15);
        });
    }
    
}