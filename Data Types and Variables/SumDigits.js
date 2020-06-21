/*
Write a function which will be given a single number. Your task is to find the sum of its digits.
*/

function solve(input) {
    let sum = 0;
    while (input > 0) {
        let lastDigit = input % 10;
        sum += lastDigit;
        input = Math.trunc(input / 10)
    }

    console.log(sum);
}
