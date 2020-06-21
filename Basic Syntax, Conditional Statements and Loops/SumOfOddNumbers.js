/*
Write a program that prints the next n odd numbers (starting from 1) and on the last row prints the sum of them.
*/

function solve(n) {

    let sum = 0;
    let count = 0;
    for (let i = 0; i <= 100; i++) {
        if (i % 2 !== 0) {
            console.log(i);
            sum += i;
            count++;
            if (count === n) {
                break
            }
        }
    }

    console.log(`Sum: ${sum}`);
}
