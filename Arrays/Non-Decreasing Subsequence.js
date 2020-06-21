function solve(input = []) {

    let max = input[0];
    let result = input.filter(el => {
        if (el >= max) {
            max = el;
        }

        return el >= max;
    })

    console.log(result.join(' '));
}

/*
Write a function that extracts only those numbers that form a non-decreasing subsequence. 
In other words, you start from the first element and continue to the end of the given array of numbers.
Any number which is LESS THAN the current biggest one is ignored, 
alternatively if it’s equal or higher than the current biggest one you set it as the current 
biggest one and you continue to the next number. 

Input
The input comes as array of numbers.

Output
The output is the processed array after the filtration, which should be a non-decreasing subsequence. The elements should be printed on one line, separated by a single space.

*/
