import { FileReader } from '../file-reader.mjs';

const reader = new FileReader('./1/input.txt');
const data = reader.read();


let sum = 0;

const pattern = /\d/g;
data.split('\n')
    .forEach((line) => {
        const matches = line.match(pattern);
        const first = matches[0];
        const last = matches[matches.length - 1];

        const twoDigit = first + last;
        sum += Number(twoDigit);
    });

console.log(sum);