/*
Write a function that prints the two smallest elements from an array of numbers.
The input comes as array of number elements.
The output is printed on the console on a single line, separated by space.

Sample case:

In:
[30, 15, 50, 5]

Out:
5 15
*/

function solve(array = []) {
    let sorted = array.sort((a, b) => {
        return a - b
    })

    console.log(sorted.splice(0, 2).join(' '));
}
