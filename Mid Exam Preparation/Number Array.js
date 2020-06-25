/*
Create a program that helps you keep track of a number array. 

First, you are going to receive the numbers оn a single line, separated by space, in the following format:
"{number1} {number2} {number3}… {numbern}"

Then you will start receiving commands until you read the "End" message. There are five possible commands:
⦁	"Switch {index}"
⦁	Find the number on this index in your collection, if the index exists, and switch its sign (negative <-> positive).  

⦁	"Change {index} {value}"
⦁	Replace the number on the given index with the number given, if the index exists.

⦁	"Sum Negative"
⦁	Print the sum of all negative numbers.

⦁	"Sum Positive"
⦁	Print the sum of all positive numbers.

⦁	"Sum All"
⦁	Print the sum of all numbers.

In the end, print the positive numbers on a single line, keeping in mind that 0 is positive, separated by a single space in the following format:
"{number1} {number2} {number3}… {numbern}"

Input
⦁	On the 1st line you are going to receive the numbers of the array (always integers), separated by a single space.
⦁	On the next lines, until the "End" command is received, you will be receiving commands.


Output
⦁	Print the tasks in the format described above.

Sample case:

In:
1 2 3 4 5
Switch 4
Change 0 -3
Sum Negative
End

Out:
-8
2 3 4

*/

function solve(input = []) {

    let numArr = input.shift().split(' ').map(Number);

    let commands;

    while ((commands = input.shift()) !== 'End') {
        let tokens = commands.split(' ');;
        let action = tokens.shift();

        if (action === 'Switch') {
            let i = +tokens[0];
            if (i >= 0 && i < numArr.length) {
                if (numArr[i] > 0) {
                    numArr[i] = numArr[i] *= -1;
                } else {
                    numArr[i] = numArr[i] *= 1
                }
            }
        } else if (action === 'Change') {
            let i = +tokens[0];
            let value = +tokens[1];

            if (i < numArr.length && i >= 0) {
                numArr.splice(i, 1, value);
            }
        } else if (action === 'Sum') {
            if (tokens[0] === 'Negative') {
                let sumNeg = 0;
                for (let i = 0; i < numArr.length; i++) {
                    if (numArr[i] < 0) {
                        sumNeg += numArr[i];
                    }
                }
                console.log(sumNeg);
            } else if (tokens[0] === 'Positive') {
                let sumPos = 0;
                for (let i = 0; i < numArr.length; i++) {
                    if (numArr[i] > 0) {
                        sumPos += numArr[i];
                    }
                }
                console.log(sumPos);
            } else if (tokens[0] === 'All') {
                let totalSum = 0;
                for (let i = 0; i < numArr.length; i++) {
                    totalSum += numArr[i]
                }
                console.log(totalSum);
            }
        }
    }

    let posNums = [];

    for (let i = 0; i < numArr.length; i++) {
        if (numArr[i] >= 0) {
            posNums.push(numArr[i])
        }
    }

    console.log(posNums.join(' '));
}
