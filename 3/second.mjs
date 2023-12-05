import { FileReader } from '../file-reader.mjs';

const reader = new FileReader('./3/input.txt');
const data = reader.read();

let sum = 0;

data.split('\n')
    .forEach((line) => {
        sum += product;
    });


console.log('Sum', sum);