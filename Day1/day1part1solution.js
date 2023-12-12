const fs = require('fs');
const readline = require('readline');

const data = fs.createReadStream('Day1Data.txt');
let total = 0;

const rl = readline.createInterface({
    input: data,
    crlfDelay: Infinity
});

rl.on('line', (line) => {
    let match = line.match(/(\d).*?(\d)[^\d]*$|(\d)/);
    let concatenatedNum;

    if (match) {
        if (match[1] && match[2]) {
            concatenatedNum = match[1] + match[2];
        } else {
            concatenatedNum = match[3] + match[3];
        }
        total += parseInt(concatenatedNum, 10)
}
});

rl.on('close', () => {
    console.log(total);
});
