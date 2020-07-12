/*
Write a function that manipulates an array of numbers. 
⦁	Add {number}: add a number to the end of the array
⦁	Remove {number}: remove number from the array
⦁	RemoveAt {index}: removes number at a given index
⦁	Insert {number} {index}: inserts a number at a given index
Note: All the indices will be valid!

Print the final state of the array (separated by single space).
The input comes as array of strings. First element will be a string containing the array to manipulate.
Every other command you receive will also be a string.
The output is the manipulated array printed on the console on a single line, separated by space.

Sample case:

In:
['4 19 2 53 6 43',
'Add 3',
'Remove 2',
'RemoveAt 1',
'Insert 8 3']

Out:
4 53 6 8 43 3
*/

function solve(array = []) {

    let outputNumbers = array.shift().split(' ').map(Number);

    while (array.length > 0) {
        let [command, number, index] = array.shift().split(' ');

        switch (command) {
            case 'Add':
                outputNumbers.push(+number);
                break;

            case 'Remove':
                outputNumbers = outputNumbers.filter(el => el !== +number);    
                break;

            case 'RemoveAt':
                outputNumbers.splice(+number, 1);
                break;

            case 'Insert':
                outputNumbers.splice(+index, 0, +number);
                break;
        }

    }

    console.log(outputNumbers.join(' '));
}

solve(['4 19 2 53 6 43',
    'Add 3',
    'Remove 2',
    'RemoveAt 1',
    'Insert 8 3'])
