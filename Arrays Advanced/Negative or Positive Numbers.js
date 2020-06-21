/*
Write a function that processes the elements in an array one by one and produces a new array.
Prepend each negative element at the front of the result and append each positive (or 0) element at the end of the result.
The input comes as array of number elements.
The output is printed on the console, each element on a new line.
*/

function solve(input) {
  let newArr = [];

  for (let num of input) {
    if (num < 0) {
      newArr.unshift(num);
    }
    else {
      newArr.push(num);
    }

  }
  console.log(newArr.join('\n'));
}
