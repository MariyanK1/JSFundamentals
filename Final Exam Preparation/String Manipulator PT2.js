/*
Create a program that executes changes over a string. First, you are going to receive the string, then commands.

You will be receiving commands until the "Done" command.

There are six possible commands:
"Change {char} {replacement}"
Replace all occurences of {char} with {replacement}, then print the string.

"Includes {string}"
Check if the string includes with {string} and print "True/False".

"End {string}"
Check if the string ends with {string} and print "True/False".

"Uppercase"
Make the whole string uppercased, then print it.

"FindIndex {char}"
Find the first index of {char}, then print it.

"Cut {startIndex} {length}"
Remove all characters from the string except for those starting from {startIndex} and the next {length} characters, then print it.

Input
On the 1st line you are going to receive the string.
On the next lines, until the "Done" command is received, you will be receiving commands.
All commands are case sensitive.
The input will always be valid.

Output
Print the output of every command in the format described above.

Examples:
Input
//Th1s 1s my str1ng!//
Change 1 i
Includes string
End my
Uppercase
FindIndex I
Cut 5 5
Done	

Output:
//This is my string!//
True
False
//THIS IS MY STRING!//
4
S IS
*/



function x(input = []) {
    let stringy = String(input.shift());
    let betterInput = input.splice(0, input.length - 1);

    function includes(value) {
        return stringy.includes(value) ? 'True' : 'False'
    }

    function change(char, replacement) {

        while (stringy.includes(char)) {
            stringy = stringy.replace(char, replacement);
        }
        return stringy
    }

    function end(value) {
        return stringy.endsWith(value) ? 'True' : 'False'
    }

    function uppercase() {
        return stringy = stringy.toLocaleUpperCase();
    }

    function findIndex(char) {
        let index = stringy.indexOf(char);
        return index
    }

    function cut(startIndex, length) {
        startIndex = +startIndex;
        length = +length
        return stringy = stringy.substr(startIndex, length)
    }
    for (const line of betterInput) {
        let [command, value1, value2] = line.split(' ');

        switch (command) {
            case 'Includes':
                console.log(includes(value1));
                break;

            case 'Change':
                console.log(change(value1, value2));
                break;

            case 'End':
                console.log(end(value1));
                break;

            case 'Uppercase':
                console.log(uppercase());
                break;

            case 'FindIndex':
                console.log(findIndex(value1));
                break;

            default:
                console.log(cut(value1, value2));
                break;
        }
    }
}

x([
    '//Th1s 1s my str1ng!//',
    'Change 1 i',
    'Includes string',
    'End my',
    'Uppercase',
    'FindIndex I',
    'Cut 5 5',
    'Done'
])
