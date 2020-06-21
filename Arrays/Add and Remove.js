/*
Write a function that adds and removes numbers to/from an array. 
You will receive a command which can either be "add" or "remove". 
The initial number is 1. Each input command should increase that number, regardless of what it is.
Upon receiving an "add" command you should add the current number to your array.
Upon receiving the "remove" command you should remove the last entered number, currently existent in the array.
*/

function solve(input = []) {
    let newArr = [];
    for (let i = 0; i < input.length; i++) {

        if (input[i] === 'remove') {
            newArr.pop();
        }

        else if (input[i] === 'add') {
            newArr.push(i + 1);
        }
    }

    if (newArr.length === 0) {
        console.log('Empty');
    }

    else {
        console.log(newArr.join(' '));
    }
}
