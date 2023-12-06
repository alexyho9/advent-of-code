/*
For example:

1abc2
pqr3stu8vwx
a1b2c3d4e5f
treb7uchet
In this example, the calibration values of these four lines
are 12, 38, 15, and 77. Adding these together produces 142.

Consider your entire calibration document. What is the sum of
all of the calibration values?
*/

const fs = require('fs');
const data = fs.readFileSync('data/01-input.txt', 'utf8');

let sample = `
1abc2
pqr3stu8vwx
a1b2c3d4e5f
treb7uchet
`;

let sample2 =
`two1nine
eightwothree
abcone2threexyz
xtwone3four
4nineeightseven2
zoneight234
7pqrstsixteen`;


const trebuchet = input => {

    let total = 0;
    for (let line of input.split(/\r?\n/)) {
        let num_array = line.match(/[\d]/g);
        if (num_array) {
            let num_string = num_array[0] + num_array[num_array.length-1];
            total += parseInt(num_string);
        }
    }
    return total;
}


const trebuchet2 = input => {
    // Create text to digit hash map
    const keys = {
        one: '1',
        two: '2',
        three: '3',
        four: '4',
        five: '5',
        six: '6',
        seven: '7',
        eight: '8',
        nine: '9'
    };
    // Initialize total
    let total = 0;
    // Iterate through lines
    let lines = input.split(/\r?\n/)
    for (let i = 0; i < lines.length; i++) {
        // add text and digit matches to an array for each line
        let num_array = lines[i].match(/one|two|three|four|five|six|seven|eight|nine|\d/g);
        // console.log(lines[i]);
        if (num_array) {
            let num_string = "";
            // Find first item per line
            let first = num_array[0]
            // If first item is text, translate to digit char
            if (first in keys) {
                num_string += keys[first];
            }
            // If first item is digit, use that digit as a char
            else if (first.match(/\d/)) {
                num_string += first;
            }
            // Find last item per line
            let last = num_array[num_array.length-1];
            // If last item is text, translate to digit char
            if (last in keys) {
                num_string += keys[last];
            }
            // If last item is digit, ust that digit is as a char
            else if (last.match(/\d/)) {
                num_string += last;
            }
            // console.log(num_string);
            total += parseInt(num_string);
        }
    }
    return total;
}


console.log(trebuchet(sample));
console.log(trebuchet(data));
console.log(trebuchet2(sample2));
console.log(trebuchet2(data));
