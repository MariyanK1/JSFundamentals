/*
Write a function, which prints common elements in two string arrays. 
Print all matches on separate lines. Compare the first array with the second array.

*/

function solve(input = [], input2 = []) {

    input.map(element =>  {
        if (input2.includes(element)) {
            console.log(element);
        }
    })
}
