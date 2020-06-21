/*
Receive three numbers and sort them in descending order. Print each number on a new line.
*/

function solve(firstNum, secondNum, thirdNum) {
    let arrayNumbers = [];
    arrayNumbers.push(firstNum, secondNum, thirdNum);
    let sorted = arrayNumbers.sort((a, b) => b - a);
    console.log(sorted.join('\n'));
}
