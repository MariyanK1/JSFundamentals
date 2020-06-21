/*
Write a function which as input will receive  a number.
 Check and print if it is amazing or not into the following format: 
	"{number} Amazing? {result}"
An amazing number is one that includes the digit 9 the sum of its digits. 
Examples for amazing numbers are 1233 (1 + 2 + 3 + 3 = 9), 583472 (5 + 8 + 3 + 4 + 7 + 2 = 29)

*/

function solve(firstNum) {

    firstNum = firstNum.toString();

    let sum = 0;

    for (let i = 0; i < firstNum.length; i++) {
        sum += Number(firstNum[i]);   
    }

    let result = sum.toString().includes('9');

    if (result) {
        console.log(`${firstNum} Amazing? True`)
    }
    
    else {
        console.log(`${firstNum} Amazing? False`);
    }
}
