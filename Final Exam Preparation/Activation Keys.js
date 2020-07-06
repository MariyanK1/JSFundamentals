/*
The first line of the input will be your raw activation key. It will consist of letters and numbers only. 
After that, until the "Generate" command is given, you will be receiving strings with instructions 
for different operations that need to be performed upon the raw activation key.

There are several types of instructions, split by ">>>":

Contains>>>{substring} – checks if the raw activation key contains the given substring.
If it does prints: "{raw activation key} contains {substring}".
If not, prints: "Substring not found!"

Flip>>>Upper/Lower>>>{startIndex}>>>{endIndex}
Changes the substring between the given indices (the end index is exclusive) to upper or lower case. 
All given indexes will be valid.
Prints the activation key.

Slice>>>{startIndex}>>>{endIndex}
Deletes the characters between the start and end indices (end index is exclusive).
Both indices will be valid.
Prints the activation key.

Input
The first line of the input will be string and it will consist of letters and numbers only. 
After the first line, until the "Generate" command is given, you will be receiving strings.

Output
After the "Generate" command is received, print:
"Your activation key is: {activation key}"

Sample Case:

In:
abcdefghijklmnopqrstuvwxyz
Slice>>>2>>>6
Flip>>>Upper>>>3>>>14
Flip>>>Lower>>>5>>>7
Contains>>>def
Contains>>>deF
Generate

Out:
abghijklmnopqrstuvwxyz
abgHIJKLMNOPQRstuvwxyz
abgHIjkLMNOPQRstuvwxyz
Substring not found!
Substring not found!
Your activation key is: abgHIjkLMNOPQRstuvwxyz
*/
function activationKeys(input = []) {
    let inputString = String(input.shift());
    let validInput = input.slice(0, input.indexOf('Generate'));

    for (const line of validInput) {
        let [command, value, value2, value3] = line.split('>>>');

        switch (command) {
            case 'Contains':
                let substring = value;
                if (inputString.includes(substring)) {
                    console.log(`${inputString} contains ${substring}`);
                } else {
                    console.log(`Substring not found!`);
                }
                break;

            case 'Flip':
                let startIndex = Number(value2);
                let endIndex = Number(value3);

                if (value === 'Upper') {
                    let substring = inputString.slice(startIndex, endIndex);
                    inputString = inputString.replace(substring, substring.toUpperCase());
                    console.log(inputString);

                } else {
                    let substr = inputString.slice(startIndex, endIndex);
                    inputString = inputString.replace(substr, substr.toLowerCase());
                    console.log(inputString);
                }
                break;

            case 'Slice':
                let startI = Number(value);
                let endI = Number(value2);
                let cut = inputString.substring(startI, endI);
                inputString = inputString.replace(cut, '')
                console.log(inputString);
                break;
            default:
                break;
        }
    }

    console.log(`Your activation key is: ${inputString}`);
}

activationKeys([
    '134softsf5ftuni2020rockz42',
    'Slice>>>3>>>7',
    'Contains>>>-rock',
    'Contains>>>-uni-',
    'Contains>>>-rocks',
    'Flip>>>Upper>>>2>>>8',
    'Flip>>>Lower>>>5>>>11',
    'Generate'
]);
