/*
Write a function that extracts all the elements of a sentence odd number of times (case-insensitive)
The input comes as a single string. The words will be separated by a single space.

Input:
'Java C# Php PHP Java PhP 3 C# 3 1 5 C#'	

Output:
c# php 1 5

*/
function solve(input) {
    let go = input.toLowerCase().split(' ');

    let words = {};

    go.forEach(word => {
        if (words[word] === undefined) {
            words[word] = 0;
        }
        words[word] += 1;
    });
    let final = [];

    Object.entries(words).forEach(entry => {
        if (entry[1] % 2 !== 0) {
            final.push(entry[0])
        }
    })

    console.log(final.join(' '));
}
