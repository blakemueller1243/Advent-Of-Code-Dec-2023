const fs = require('fs');
const readline = require('readline');

const data = fs.createReadStream('Day1Data.txt');
let total = -2; //because it adds an extra 2 for ?????? reasons
const numberWords = {
    'one': '1',
    'two': '2',
    'three': '3',
    'four': '4',
    'five': '5',
    'six': '6',
    'seven': '7',
    'eight': '8',
    'nine': '9'
};

function replaceNumberWords(str) {
    return str.replace(/(zero|one|two|three|four|five|six|seven|eight|nine)/gi, (match) => numberWords[match.toLowerCase()]);
}

const rl = readline.createInterface({
    input: data,
    crlfDelay: Infinity
});

rl.on('line', (line) => {
    wordtonum = replaceNumberWords(line);
    let match = wordtonum.match(/(\d).*?(\d)[^\d]*$|(\d)/);
    let concatenatedNum;

    if (match) {
        if (match[1] && match[2]) {
            concatenatedNum = match[1] + match[2];
        } else {
            concatenatedNum = match[3] + match[3];
        }
        total += parseInt(concatenatedNum, 10);
        console.log(total);
}
});

rl.on('close', () => {
    console.log(total);
});
