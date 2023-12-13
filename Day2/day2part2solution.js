const fs = require('fs');
const readline = require('readline');

const data = fs.createReadStream('day2data.txt');
let totalGamePower = 0;

const rl = readline.createInterface({
    input: data,
    crlfDelay: Infinity
});

rl.on('line', (line) => {
 const games = line.split(';');
 let totals = { red: 0, green: 0, blue: 0 };

 games.forEach (game =>{
    const matches = game.match(/\b(\d+)\s*(red|green|blue)\b/g);

    if (matches) {
        matches.forEach(match => {
            const parts = match.split(' ');
            const color = parts[1];
            const number = parseInt(parts[0]);
            if (number > totals[color]){
                totals[color] = number;
            }
        });
      }
  });
  gamePower = totals.red * totals.green * totals.blue
  totalGamePower += gamePower
});

rl.on('close', () => {
    console.log('File processing complete.');
    console.log(totalGamePower);
});
