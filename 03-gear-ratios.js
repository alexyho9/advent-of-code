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
    // Initialize result
    let result = 0;

    // split lines from text import
    const lines = input.split(/\n/);

    // Line Level iteration
    for (let i = 10; i < 13; i++) {
        let line = lines[i];
        console.log("line:", i+1, line);

        // Get all numbers in a line
        let list_numbers = line.match(/\d+/g);
        // console.log(list_numbers);

        // Create a key of numbers and their positions
        let nums_key = {};
        if (list_numbers) {
            for (let num of list_numbers) {
                let num_index = line.indexOf(num)
                nums_key[num] = [];
                // Add index - 1 to array in hash map if index is greater than zero
                if (num_index > 0) {
                    nums_key[num].push(num_index - 1);
                }
                // Character Level: push additional indexes to hashmap including after tail
                for (let j = 0; j <= num.length; j++) {
                    nums_key[num].push(num_index + j);
                }
            }
        }
        // Get indexes of symbols
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
        console.log(symbols);
        // Iterate through nums keys and compare to symbol positions
        for (let num in nums_key) {
            let included = false;
            let locations = nums_key[num];
            for (let location of locations) {
                if (symbols.includes(location)) {
                    included = true;
                    console.log("Number:", num, "locations:", locations, "match:", location);
                }
            }
            if (included) {
                result += parseInt(num);
            }
        }
    }
    console.log(result);
    return result;
}

// console.log(gearRatios(sample));
console.log(gearRatios(data));