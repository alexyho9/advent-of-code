/*
two1nine
eightwothree
abcone2threexyz
xtwone3four
4nineeightseven2
zoneight234
7pqrstsixteen
In this example, the calibration values are 29, 83, 13, 24, 42, 14, and 76. Adding these together produces 281.

What is the sum of all of the calibration values?
*/

let sample = `
two1nine
eightwothree
abcone2threexyz
xtwone3four
4nineeightseven2
zoneight234
7pqrstsixteen
`;

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
    for (let line of input.split(/\r?\n/)) {
        // add text and digit matches to an array for each line
        let num_array = line.match(/one|two|three|four|five|six|seven|eight|nine|\d/g);
        if (num_array) {
            let num_string = "";
            // Find first item per line
            let first = num_array[0]
            // If first item is text, translate to digit char
            if (first in keys) {
                num_string += keys[first];
            }
            // If first item is digit, use that digit as a char
            else {
                num_string += first;
            }
            // Find last item per line
            let last = num_array[num_array.length - 1];
            // If last item is text, translate to digit char
            if (last in keys) {
                num_string += keys[last];
            }
            // If last item is digit, ust that digit is as a char
            else {
                num_string += last;
            }
            total += parseInt(num_string);
        }
    }
    return total;
}

console.log(trebuchet2(sample));
