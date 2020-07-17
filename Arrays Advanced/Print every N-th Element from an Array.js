/*
The input comes as an array of strings. The last element is N - the step.
The output is every element on the N-th step starting from the first one. If the step is "3",
you need to print the 1-st, the 4-th, the 7-th … and so on, until you reach the end of the array. The elements must be printed each on a new line.

Sample Case:
In:
['5', 
'20', 
'31', 
'4', 
'20', 
'2']

Out:
5
31
20
*/


function x(input = []) {
    let nth = +input.pop();

    for (let i = 0; i < input.length; i += nth) {
        const element = input[i];
        console.log(element);
    }

}
