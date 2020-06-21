/*
Add or Subtract
Write a function, which changes the value of odd and even numbers in an array of numbers. 
If the number is even - add to its value its index position
If the number is odd - subtract to its value its index position

Output
On the first line print the newly modified array, on the second line print the sum of numbers from the original array,
on the third line print the sum of numbers from the modified array.

*/
function solve(input = []) {
    let origSum = 0;
    let modSum = 0;
    let modArr = [];

    for (let i = 0; i < input.length; i++) {
        let currNumber = input[i];
        origSum += currNumber;

        if (currNumber % 2 === 0) {

            currNumber += i;
            modSum += currNumber;
            modArr.push(currNumber);
        }

        else {
            currNumber -= i
            modSum += currNumber;
            modArr.push(currNumber);
        }

    }
    console.log(modArr);
    console.log(origSum);
    console.log(modSum);
}
