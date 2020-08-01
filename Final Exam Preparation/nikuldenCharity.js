/*
First, you are going to receive a string, then commands.
You will receive "decrypting" commands until you get the "Finish" command. 

"Replace {currentChar} {newChar}"
Replace all occurrences of {currentChar} with {newChar}, then print the current message.

"Cut {startIndex} {endIndex}"
Remove the substring from the {startIndex} until the {endIndex}, then print the current message. 
If any of the indexes is not valid, print: 
"Invalid indexes!"

"Make {Upper/Lower}"
Replace all letters with upper/lower case and print the current message

"Check" {string}
Check  if the message contains the given string.
If it does, print: "Message contains {string}"
If it doesn’t, print: "Message doesn't contain {string}"

"Sum {startIndex} {endIndex}"
Get the substring from {startIndex} to {endIndex} and print the sum of the ASCII values of the substring.
If any of the {startIndex} or {endIndex} are invalid, print:

"Invalid indexes!"
Note: At any time, the message will contain at least one character.

Input
On the 1st line you are going to receive the string.
On the next lines, until the "Finish" command is received, you will be receiving commands.

Output
Print the output of every command in the format described above.

Constraints
The indexes will be integers in the range [-50…50]


*/

function charity(input = []) {
    let message = input.shift();
    let betterInput = input.splice(0, input.indexOf('Finish'));

    for (const line of betterInput) {
        let [command, value1, value2] = line.split(' ');

        switch (command) {
            case 'Replace':
                let currChar = value1;
                let newChar = value2;

                while (message.includes(currChar)) {
                    message = message.replace(currChar, newChar);
                }

                console.log(message);

                break;

            case 'Make':
                if (value1 === 'Upper') {
                    message = message.toUpperCase();
                    console.log(message);
                } else {
                    message = message.toLowerCase();
                    console.log(message);
                }
                break;

            case 'Check':
                if (message.includes(value1)) {
                    console.log(`Message contains ${value1}`);
                } else {
                    console.log(`Message doesn't contain ${value1}`);
                }
                break;

            case 'Sum':
                let startIndex = +value1;
                let endIndex = +value2;

                if (
                    startIndex < message.length
                    && startIndex > -1
                    && endIndex < message.length
                    && endIndex > -1
                ) {

                    let substring = message.substring(startIndex, endIndex + 1);

                    let sum = 0;

                    for (let i = 0; i < substring.length; i++) {
                        sum += substring.charCodeAt(i);
                    }
                    console.log(sum);

                } else {
                    console.log("Invalid indexes!");
                }

                break;

            case 'Cut':
                let startIndexx = +value1;
                let endIndexx = +value2;

                if (
                    startIndexx < message.length
                    && startIndexx > -1
                    && endIndexx < message.length
                    && endIndexx > -1
                ) {
                    let deleted = message.substring(startIndexx, endIndexx + 1);
                    message = message.replace(deleted, '')
                    console.log(message);
                } else {
                    console.log("Invalid indexes!");
                }
                break;
        }
    }
}

charity([
    'ILikeSharan',
    'Replace a e',
    'Make Upper',
    'Check SHEREN',
    'Sum 1 4',
    'Cut 1 4',
    'Finish'
])
