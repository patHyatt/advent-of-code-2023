import { FileReader } from '../file-reader.mjs';

const reader = new FileReader('./2/input.txt');
const data = reader.read();

let sum = 0;

data.split('\n')
    .forEach((line) => {

        const gameAndContent = line.split(': ');

        const gameId = Number(gameAndContent[0].replace('Game ', ''));
        const content = gameAndContent[1];
        const games = content.split(';')

        let requiredRed = 0;
        let requiredBlue = 0;
        let requiredGreen = 0;

        games.forEach(rolls => {
            const dies = rolls.split(',');
            dies.forEach(er => {
                const numberAndColor = er.trim().split(' ');

                // console.log(numberAndColor)
                switch (numberAndColor[1]) {
                    case 'red':
                        requiredRed = Math.max(requiredRed, Number(numberAndColor[0]));
                        break;
                    case 'blue':
                        requiredBlue = Math.max(requiredBlue, Number(numberAndColor[0]));
                        break;

                    case 'green':
                        requiredGreen = Math.max(requiredGreen, Number(numberAndColor[0]));
                        break;
                }
            });
        });

        // console.log(gameId, { requiredRed, requiredBlue, requiredGreen });

        let product = 0;
        if (requiredRed !== 0)
            product = 1 * requiredRed;
        if (requiredBlue !== 0)
            product *= requiredBlue;
        if (requiredGreen !== 0)
            product *= requiredGreen;

        sum += product;
    });


console.log('Sum', sum);


//NOT 112165