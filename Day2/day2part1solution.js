const fs = require('fs');
const readline = require('readline');

const data = fs.createReadStream('day2data.txt');

const rl = readline.createInterface({
    input: data,
    crlfDelay: Infinity
});

const limits = { red: 12, green: 13, blue: 14 };
let successfulGameTotal = 0;

rl.on('line', (line) => {
 const games = line.split(';');
 const gameTitleMatch = line.match(/^.*?:/);
 const gameTitle = gameTitleMatch ? gameTitleMatch[0] : "Unknown Game";
 const gameNumber = parseInt(gameTitle.match(/\d+/)) || 0;
 let gameSuccessful = true;

 games.forEach (game =>{
    let totals = { red: 0, green: 0, blue: 0 };
    limitExceeded = false;

    const matches = game.match(/\b(\d+)\s*(red|green|blue)\b/g);

    if (matches) {
        matches.forEach(match => {
            const parts = match.split(' ');
            const color = parts[1];
            const number = parseInt(parts[0]);

            totals[color] += number;

            if (totals[color] > limits[color]) {
                console.log(`limit exceeded for ${color} in game: ${gameNumber}`);
                limitExceeded = true;
            }
        });
      }
    if(limitExceeded) {
        gameSuccessful = false;
    }
  });

 if (gameSuccessful) {
 console.log(`${gameTitle} is fine`);
 successfulGameTotal += gameNumber;
 return;
 }
});

rl.on('close', () => {
    console.log('File processing complete.');
    console.log(successfulGameTotal);
});
