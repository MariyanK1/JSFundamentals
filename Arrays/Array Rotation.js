/*
Write a function that receives an array and number of rotations you have to perform (first element goes at the end). 
*/

function solve(arr = [], num) {
  for (let i = 1; i <= num; i++) {
    let el = arr.shift();
    arr.push(el);
  }

  console.log(arr.join(' '));
}
