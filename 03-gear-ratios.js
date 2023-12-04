const fs = require('fs');
const data = fs.readFileSync('03-input.txt', 'utf8');

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
    // split lines from text import
    const lines = input.split(/\n/);

    // Line Level iteration
    for (let i = 2; i < 3; i++) {
        let line = lines[i];
        console.log(line);

        // Get all numbers in a line
        let regexNumbers = /\d+/g;
        listNumbers = line.match(regexNumbers);
        console.log(listNumbers);

        // Create a hash map to store numbers and their positions
        let key = {};

        // Number Level
        for (let num of listNumbers) {
            let num_index = line.indexOf(num)
            key[num] = [];
            // Add initial index to array in hash map
            key[num].push(num_index);

            // Character Level
            if (num.length > 1) {
                // If the number has multiple digits, push additional indexes to hashmap
                for (let j = 1; j < num.length; j++) {
                    key[num].push(num_index + j);
                }
            }
        }
        console.log(key);

        // Get indexes of symbols
        let symbols_indexes = new Array;
        for (let k = 0; k < line.length; k++) {
            if (line[k].match(/[^\d.]/)) {
                symbols_indexes.push(k);
            }
            // get symbol indexes for previous and next lines
            if (lines[i-1] && lines[i-1][k].match(/[^\d.]/)) {
                symbols_indexes.push(k);
            }
            if (lines[i+1] && lines[i+1][k].match(/[^\d.]/)) {
                symbols_indexes.push(k);
            }
        }
        console.log(symbols_indexes);
    }
}


gearRatios(data);