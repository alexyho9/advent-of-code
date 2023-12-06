const fs = require('fs');
const data = fs.readFileSync('data/03-input.txt', 'utf8');

const sample =
`467..114..
...*......
..35..633.
......#...
617*......
.....+.58.
..592.....
......755.
...$.*....
.664.598..`;


const gearRatios = input => {
    // Initialize result
    let result = 0;

    // split lines from text import
    const lines = input.split(/\n/);

    // Line Level iteration
    for (let i = 0; i < lines.length; i++) {
    // for (let i = 95; i < 96; i++) {
        let line = lines[i];
        let copy = line.slice();
        // console.log("line:", i+1, line);

        // Get all numbers in a line

        // Get indexes of symbols and place them in an array
        let symbols = new Array;
        for (let k = 0; k < line.length; k++) {
            if (line[k].match(/[^\d.]/)) {
                symbols.push(k);
            }
            // get symbol indexes for previous and next lines
            if (lines[i-1] && lines[i-1][k].match(/[^\d.]/)) {
                symbols.push(k);
            }
            if (lines[i+1] && lines[i+1][k].match(/[^\d.]/)) {
                symbols.push(k);
            }
        }
        // console.log("symbols:", symbols);

        // List numbers and check for duplicates
        let list_numbers = line.match(/\d+/g);

        // Iterate over numbers in line and check for positional match to symbols
        let subtotal = 0;
        if (list_numbers) {
            let last_index = 0;
            for (let num of list_numbers) {
                let included = false;
                let num_start = copy.indexOf(num, last_index);
                // Character Level: push additional indexes to hashmap including before and after tail
                for (let j = -1; j <= num.length; j++) {
                    sub_index = num_start + j;
                    if (symbols.includes(sub_index)) {
                        included = true;
                        // console.log("Match:", num, "Position:", sub_index)
                        last_index = num_start + num.length;
                    }
                }
                if (included) {
                    subtotal += parseInt(num);
                }
            }
        }
        result += subtotal;
    }
    // console.log(result);
    return result;
}

console.log(gearRatios(sample));
console.log(gearRatios(data));