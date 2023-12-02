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

import {input} from "./01-input.js";

let sample = `
1abc2
pqr3stu8vwx
a1b2c3d4e5f
treb7uchet
`;


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

console.log(trebuchet(sample));
