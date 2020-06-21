/*
Write a function to display numbers from given start to given end and their sum. 
The input comes as two number parameters.
*/

function solve(num1, num2) {
    let row = ''
    let sum = 0;
    for (let i = num1; i <= num2; i++) {
       row += i + " ";
       sum += i;
    }

    console.log(row);
    console.log(`Sum: ${sum}`);
}
