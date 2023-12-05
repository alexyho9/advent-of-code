const fs = require('fs');
const data = fs.readFileSync('04-input.txt', 'utf8');

const example =
`Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53
Card 2: 13 32 20 16 61 | 61 30 68 82 17 32 24 19
Card 3:  1 21 53 59 44 | 69 82 63 72 16 21 14  1
Card 4: 41 92 73 84 69 | 59 84 76 51 58  5 54 83
Card 5: 87 83 26 28 32 | 88 30 70 12 93 22 82 36
Card 6: 31 18 13 56 72 | 74 77 10 23 35 67 36 11`;
// answer 13


const scratchboard = input => {
    let result = 0;
    const lines = input.split('\n');
    for (let i = 0; i < lines.length; i++) {
        let line = lines[i];
        let [card, winning, draws] = line.split(/:|\|/);
        winning = winning.match(/\d+/g);
        draws = draws.match(/\d+/g);
        let matches = 0;
        for (let draw of draws) {
            if (winning.includes(draw)) {
                matches++;
            }
        }
        let points = matches > 0 ? 2 ** (matches - 1) : 0;
        console.log("matches:", matches, "points:", points);
        result += points;
    }
    console.log(result);
    return result;
}

scratchboard(data);