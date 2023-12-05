import { FileReader } from '../file-reader.mjs';

const reader = new FileReader('./3/test.txt');
const data = reader.read();

let sum = 0;

const neighbors = [
    { row: -1, column: -1 },
    { row: -1, column: 0 },
    { row: -1, column: 1 },
    { row: 0, column: -1 },
    { row: 0, column: 1 },
    { row: 1, column: -1 },
    { row: 1, column: 0 },
    { row: 1, column: 1 },
]

const numbersByIndexRange = {
}

const graph = [];
data.split('\r\n')
    .forEach((line) => {
        graph.push(line.split(''));
    });

for (let row = 0; row < graph.length; row++) {
    for (let col = 0; col < graph[row].length; col++) {
        const item = graph[row][col];

        if(!!Number(item))
        {
            
        }
    }
}


for (let row = 0; row < graph.length; row++) {
    for (let col = 0; col < graph[row].length; col++) {
        const item = graph[row][col];

        //find only symbols
        if (item === '.') continue;
        if (!!Number(item)) continue;

        //Its a symbol
        neighbors.forEach((neighbor) => {
            const neighborRow = row + neighbor.row;
            const neighborColumn = col + neighbor.column;

            if (neighborRow < 0 || neighborRow >= graph.length)
                return;
            if (neighborColumn < 0 || neighborColumn >= graph[row].length)
                return;

            const neighborItem = graph[neighborRow][neighborColumn];
            if (neighborItem === '.') return;

            console.log(item, neighborItem);



            if (neighborItem === '#') {
                sum += 1;
            }
        });
    }
}

console.log('Sum', sum);