import { FileReader } from '../file-reader.mjs';

const reader = new FileReader('./2/input.txt');
const data = reader.read();

let sum = 0;

const limits = {
    red: 12,
    blue: 14,
    green: 13
}

data.split('\n')
    .forEach((line) => {

        const gameAndContent = line.split(': ');

        const gameId = Number(gameAndContent[0].replace('Game ', ''));
        const content = gameAndContent[1];
        const games = content.split(';')

        let valid = true;

        games.forEach(rolls => {
            const dies = rolls.split(',');
            dies.forEach(er => {
                const numberAndColor = er.trim().split(' ');
                if (Number(numberAndColor[0]) > limits[numberAndColor[1]]) {
                    valid = false;
                }
            });
        });

        if (valid)
            sum += gameId;
    });


console.log('Sum', sum);

// NOT 2053