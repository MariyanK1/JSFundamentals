//Write a function that receives a single string and replaces any sequence of the same letters with a single corresponding letter.

function solve(input) {
    
    console.log(input
    .split('')
    .filter((l, i, arr) => l !== arr[i + 1])
    .join(''))

}
