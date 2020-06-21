/*
You are given an array of numbers. Write a function that prints the elements at odd positions from the array, 
doubled and in reverse order.

The input comes as array of number elements.
The output is printed on the console on a single line, separated by space.

Sample case:

In:
[10, 15, 20, 25]

Out:
50 30

*/

function solve(array = []) {
    let outputArray = [];
    for (let i = 0; i < array.length; i++) {

        if (i % 2 !== 0) {
            let el = array[i];
            el *= 2;
            outputArray.push(el)
        }
    }

    console.log(outputArray.reverse().join(' '));
}
