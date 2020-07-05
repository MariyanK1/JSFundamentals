/*
You are given an array with integers. Write a program to modify the elements after receive the commands “swap”, “multiply” or “decrease”.

“swap {index1} {index2}” take two elements and swap their places.

“multiply {index1} {index2}” take element at the 1st index and multiply it with element at 2nd index. Save the product at the 1st index.

“decrease” decreases all elements in the array with 1.

Input
On the first input line you will be given the initial array values separated by a single space.
On the next lines you will receive commands until you receive the command “end”. The commands are as follow: 
“swap {index1} {index2}”
“multiply {index1} {index2}”
“decrease”

Output
The output should be printed on the console and consist element of the modified array – separated by “, “(comma and single space).

Constraints
Commands will be: “swap”, “multiply”, “decrease” and “end”
Elements of the array will be integer numbers in the range [-231...231]
Count of the array elements will be in the range [2...100]
Indexes will be always in the range of the array

Sample case:
In:
 [
  '23 -2 321 87 42 90 -123',
  'swap 1 3',
  'swap 3 6',
  'swap 1 0',
  'multiply 1 2',
  'multiply 2 1',
  'decrease',
  'end'
]

Out:
86, 7382, 2369942, -124, 41, 89, -3

*/
function x(input = []) {
    let inputArr = input.shift().split(' ').map(Number);
    let betterInput = input.slice(0, input.indexOf('end'));

    for (const line of betterInput) {
        let [command, index, index2] = line.split(' ');
        index = Number(index)
        index2 = Number(index2)

        switch (command) {
            case 'swap':
                let el1 = inputArr[index];
                let el2 = inputArr[index2];

                inputArr[index] = el2;
                inputArr[index2] = el1;
                break;

            case 'multiply':
                inputArr[index] *= inputArr[index2]
                break;

            case 'decrease':
                for (let i = 0; i < inputArr.length; i++) {
                    inputArr[i] -= 1;
                }
                break;

        }
    }
    console.log(inputArr.join(', '));
}
