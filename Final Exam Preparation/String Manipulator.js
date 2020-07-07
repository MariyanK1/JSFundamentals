/*
Create a program that executes changes over a string.
First, you are going to receive the string, then commands.

You will be receiving commands until the "End" command.

There are six possible commands:
"Translate {char} {replacement}"
Replace all occurences of {char} with {replacement}, then print the string.

"Includes {string}"
Check if the string includes {string} and print "True/False".

"Start {string}"
Check if the string starts with {string} and print "True/False".

"Lowercase"
Make the whole string lowercased, then print it.

"FindIndex {char}"
Find the last index of {char}, then print it.

"Remove {startIndex} {count}"
Remove {count} characters from the string, starting from {startIndex}, then print it.

Input
On the 1st line you are going to receive the string.
On the next lines, until the "End" command is received, you will be receiving commands.
All commands are case sensitive.
The input will always be valid.

Output
Print the output of every command in the format described above.

Sample Case:

In:
//Thi5 I5 MY 5trING!//
Translate 5 s
Includes string
Start //This
Lowercase
FindIndex i
Remove 0 10
End

Out:
//This Is MY strING!//
False
True
//this is my string!//
16
my string!//
*/

function solve(input = []) {

    let inputString = input.shift();
    input.pop();

    function translate(char, replacement) {

        for (let ch of inputString) {
            if (ch === char) {
                inputString = inputString.replace(ch, replacement)
            }
        }

        return inputString
    }
    function includes(string) {
        if (inputString.includes(string)) {
            return "True"
        } else {
            return "False"
        }
    }
    function start(string) {
        if (inputString.startsWith(string)) {
            return "True"
        } else {
            return "False"
        };
    }
    function findIndex(char) {
        let charStr = inputString.lastIndexOf(char);

        return charStr;
    }
    function remove(startIndex, count) {
        let arr = Array.from(inputString);
        let deletd = arr.splice(startIndex, count)
        return arr.join('')
    }

    for (const line of input) {
        let tokens = line.split(' ');
        let command = tokens.shift();

        if (command === 'Translate') {
            console.log(translate(tokens[0], tokens[1]))
        } else if (command === 'Includes') {
            console.log(includes(tokens[0]));
        } else if (command === 'Start') {
            console.log(start(tokens[0]));
        } else if (command === 'Lowercase') {
            inputString = inputString.toLowerCase();
            console.log(inputString);
        } else if (command === 'FindIndex') {
            console.log(findIndex(tokens[0]));
        } else {
            console.log(remove(Number(tokens[0]), Number(tokens[1])));
        }
    }
}

solve([
    '//Thi5 I5 MY 5trING!//',
    'Translate 5 s',
    'Includes string',
    'Start //This',
    'Lowercase',
    'FindIndex i',
    'Remove 0 10',
    'End'
])
