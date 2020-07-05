/*
Write a program to read a sequence of integers and find and print the top 5 numbers that are 
greater than the average value in the sequence, sorted in descending order.

Input
Read from the console a single line holding space separated number.

Output
Print the above described numbers on a single line, space separated. 
If less than 5 numbers hold the above mentioned property, print less than 5 numbers. 
Print “No” if no numbers hold the above property.

Constraints
All input numbers are integers in range [-1 000 000 … 1 000 000]. The count of numbers is in range [1…10 000].

Sample case:

In:
5 2 3 4 -10 30 40 50 20 50 60 60 51

Out:
60 60 51 50 50
*/

function x(input = String) {
    let betterInput = input.split(' ').map(Number);
    let avg = 0;
    for (let i = 0; i < betterInput.length; i++) {
        avg += betterInput[i];
    }
    let finalSum = avg / betterInput.length;

    let newAvg = [];

    for (let i = 0; i < betterInput.length; i++) {
        if (finalSum < betterInput[i]) {
            newAvg.push(betterInput[i])
        }
    }
    
    if (newAvg.length <= 0) {
        console.log('No');
    }
    if (newAvg.length > 5) {
        let go = newAvg.sort((a, b) => b - a);
        let sliced = go.splice(0, 5);
        console.log(sliced.join(' '));

    }
    
    else if (newAvg.length < 5 && newAvg.length !== 0) {
        let sorted = newAvg.sort((a, b) => b - a);
        console.log(sorted.join(' '));
    } 

}
