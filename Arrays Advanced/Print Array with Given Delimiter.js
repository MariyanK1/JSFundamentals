/*
The input comes as an array of strings. The last element of the array is the delimiter.
The output is the same array, printed on the console, each element separated from the others by the given delimiter.

Sample Case:

In:
['One', 
'Two', 
'Three', 
'Four', 
'Five', 
'-']

Out:
One-Two-Three-Four-Five
*/

function x(input = []) {
    let delimiter = input.pop();
    let newArr = [];
    for (let i = 0; i < input.length; i++) {
        let element = input[i];
        element += delimiter;
        newArr.push(element);
    }

    let result = newArr.join('');
    let output = result.slice(0, result.length - 1);
    console.log(output);
}
