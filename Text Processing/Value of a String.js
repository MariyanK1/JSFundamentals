/*
Write a function which finds the sum of the ASCII codes of the letters in a given string.
Your tasks will be a bit harder, because you will have to find the sum of either the lowercase or the uppercase letters.

On the first line, you will receive the string.

On the second line, you will receive one of two possible inputs:
If you receive “UPPERCASE”  find the sum of all uppercase English letters in the previously received string
If you receive “LOWERCASE”  find the sum of all lowercase English letters in the previously received string

You should not sum the ASCII codes of any characters, which are not letters.
At the end print the sum in the following format:
The total sum is: {sum}

Sample case:

In:
HelloFromMyAwesomePROGRAM
LOWERCASE

Out:
The total sum is: 1539

*/
function solve(input = []) {

    let inputString = String(input.shift());
    let command = input.shift();
    let sum = 0;
    switch (command) {
        case 'LOWERCASE':
            for (let i = 0; i < inputString.length; i++) {
                if (inputString.charCodeAt(i) >= 97 &&
                    inputString.charCodeAt(i) <= 122) {
                    sum += inputString.charCodeAt(i);
                }
            }
            break;

        default:
            for (let index = 0; index < inputString.length; index++) {
                if (inputString.charCodeAt(index) >= 65 &&
                    inputString.charCodeAt(index) <= 90) {
                    sum += inputString.charCodeAt(index);
                }
            }
            break;
    }

    console.log(`The total sum is: ${sum}`);
}

solve(['HelloFromMyAwesomePROGRAM', 'LOWERCASE', ''])
