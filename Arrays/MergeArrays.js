/*
Write a function which receives two string arrays and merges them into a third array.  
If the index of the element is even, add into the third array the sum of both elements at that index
If the index of the element is odd, add the concatenation of both elements at that index

Input
As input you will receive two string arrays.
Output
As output you should print the resulting third array, each element separated by " - ".
*/

function solve(input1 = [], input2 = []) {
  let sum;
  let newArr = [];
  for (let i = 0; i < input1.length; i++) {
    if (i % 2 === 0) {
      sum = Number(input1[i]) + Number(input2[i]);
      newArr.push(sum);
    }
    if (i % 2 === 1) {
      sum = input1[i] + input2[i];
      newArr.push(sum);
    }
  }

  return newArr.join(" - ")
}
