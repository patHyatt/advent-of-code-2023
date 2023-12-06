import { FileReader } from '../file-reader.mjs';


solve_first();
solve_second();


function solve_first() {
    const reader = new FileReader('./5/test.txt');
    const data = reader.read().split('\r\n');

    let seeds = [];

    let maps = [];

    for (let lineNumber = 0; lineNumber < data.length; lineNumber++) {
        const line = data[lineNumber];

        if (lineNumber === 0) {
            //seeds
            seeds = parseSeeds(line);
            console.log('Seeds', seeds);
            continue;
        }

        //map declaration
        if (line.includes(':')) {
            maps.push(new Map()); //Add new map to the mix
            continue;
        }

        if (line === '')
            continue; //skip empty lines

        //map mappings
        const current = maps[maps.length - 1];
        parseMapRules(line, current);
    }

    seeds.forEach((id, index) => {
        let current = id;
        for (let i = 0; i < maps.length; i++) {
            current = maps[i].get(current) ?? current;
            console.log(`Seed ${index} results in ${current}`);
        }
    });

    console.log('Maps');
    maps.forEach(x => console.log(x));
}

function solve_second() { }

function parseSeeds(line) {
    return line
        .split(':')[1]
        .trim()
        .split(' ');
}

function parseMapRules(line, map) {
    const [destination, source, range] = line.split(' ').map(x => parseInt(x));

    for (let i = 0; i < range; i++)
        map.set(destination + i, destination + i + range);
}
