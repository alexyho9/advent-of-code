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
7pqrstsixteen
eighthree`;


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

    let total = 0;

    let lines = input.split(/\r?\n/)
    for (let i = 0; i < lines.length; i++) {
        let line = lines[i];
        let first, last;
        // console.log(line);
        // Find first number. If it is a word, convert to digit character.
        first = line.match(/one|two|three|four|five|six|seven|eight|nine|\d/)[0];
        if (first in keys) {
            first = keys[first];
        }

        // Find last number. Iterate backwards from end of string
        // and check if character is a digit.
        // Else check if string of length 3-5 matches a key
        for (let j = line.length - 1; j >= 0; j--) {
            if (/\d/.test(line[j])) {
                last = line[j];
                break;
            }
            else if (line.slice(j, j + 3) in keys) {
                last = line.slice(j, j + 3);
                last = keys[last];
                break;
            }
            else if (line.slice(j, j + 4) in keys) {
                last = line.slice(j, j + 4);
                last = keys[last];
                break;
            }
            else if (line.slice(j, j + 5) in keys) {
                last = line.slice(j, j + 5);
                last = keys[last];
                break;
            }
        }
        // Combine first and last strings and parse to number. Then add to running total.
        // console.log(first + last)
        total += parseInt(first + last);

    }
    return total;
}


// console.log(trebuchet(sample));
// console.log(trebuchet(data));
console.log(trebuchet2(sample2));
console.log(trebuchet2(data));
