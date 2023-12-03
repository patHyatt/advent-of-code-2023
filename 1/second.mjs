import { FileReader } from '../file-reader.mjs';

const reader = new FileReader('./1/input.txt');
const data = reader.read();

const pattern = /(\d|one|two|three|four|five|six|seven|eight|nine)/g;
const map = {
    one: '1',
    two: '2',
    three: '3',
    four: '4',
    five: '5',
    six: '6',
    seven: '7',
    eight: '8',
    nine: '9'
};

let sum = 0;
data.split('\n')
    .forEach((line) => {
        const matches = line.matchAll(pattern);
        console.log(matches[2]);
        let first = matches[0];
        let last = matches[matches.length - 1];

        if (first in map)
            first = map[first];

        if (last in map)
            last = map[last];

        const twoDigit = first + last;
        console.log(line, twoDigit)
        sum += Number(twoDigit);
    });

console.log('Sum', sum);
