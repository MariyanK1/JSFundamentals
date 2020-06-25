/*
The input will be a single string.
Write a function that cuts the given string into half and reverse the two halves. 
Print each half on a separate line.
*/

function solve(input) {
return [
    input
    .substring(0, input.length / 2)
    .split('')
    .reverse()
    .join(''),
    input
        .substring(0, input.length / 2)
        .split('')
        .reverse()
        .join('')
].join('\n')
}

solve('tluciffiDsIsihTgnizamAoSsIsihT')
