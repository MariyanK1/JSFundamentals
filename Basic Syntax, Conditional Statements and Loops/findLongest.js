/*
Find the number with the most digits.

If two numbers in the argument array have the same number of digits, return the first one in the array.
*/

function findLongest(array) {
    let input = array.map(String);
    let maxLen = 0;
    let num = 0;
    for (let i = 0; i < input.length; i++) {
        const numLength = input[i].length;
        
        if (numLength > maxLen) {
            maxLen = numLength;
            num = +input[i];
        }
    }

    return num;
}

findLongest([9000, 201, 9001])
