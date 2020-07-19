/*
Create a program, that checks if inputs have a valid message and encrypt it.
On the first line you will receive a number that indicates how many inputs you will receive on the next lines.

A message is valid when:
It is in the end of the input

It starts with a tag, which is surrounded by either '*' or '@' (but not both at the same time), the tag itself has to be minimum 3 characters long, start with a uppercase letter, followed only by lowercase letters

There is a colon and a single white space after the tag

There are 3 groups consisting of letters between '[' and ']', followed by a pipe ('|')

Example for a valid message: 
"*Request*: [I]|[s]|[i]| "

You must check if the message is valid and if it is- decrypt it, if it isn’t- print the following message: 
"Valid message not found!"

Encrypting a message means to take all letters and turn them into ASCII numbers.
After successful encrypt, print it in the following format:
{tag}: {number1} {number2} {number3} (…)

Input
On the first line - n - the count of inputs.
On the next n lines - input that you have to check if it has a valid message.

Output
Print all results from each input, each on a new line.

Examples

Input:
3
*Request*: [I]|[s]|[i]|
*Taggy@: [73]|[73]|[73]|
Should be valid @Taggy@: [v]|[a]|[l]|

Output:
Request: 73 115 105
Valid message not found!
Taggy: 118 97 108
*/


function x(input = []) {
    input.shift();
    let pattern = /(\*|\@)([A-Z][a-z]{3,})\1:\s(\[[A-Za-z]\]\|\[[A-Za-z]\]\|\[[A-Za-z]\]\|)$/;
    let ascii = '';
    for (const line of input) {
        let match = pattern.exec(line);

        if (match !== null) {
            let tag = match[2];
            let letters = match[3].split(/\W/).join('');
            for (let i = 0; i < letters.length; i++) {
                let value = letters.charCodeAt(i);
                ascii += value + ' ';
            }
            console.log(`${tag}: ${ascii.trim()}`);
            ascii = '';
        } else {
            console.log('Valid message not found!');
        }
    }
}

x([
    '3',
    '@Taggy@: [i]|[n]|[v]|[a]|[l]|[i]|[d]| this shouldn�t be valid',
    '*tAGged*: [i][i][i]|',
    'Should be invalid @Taggy@: [v]|[a]|[l]|[l]|[l]|'
])
