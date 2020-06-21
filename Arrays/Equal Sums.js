/*
Write a function that determines if there exists an element in the array of numbers such that the sum of the e
lements on its left is equal to the sum of the elements on its right. 

If there are NO elements to the left/right, their sum is 0. 
Print the index that satisfies the required condition or "no" if there is no such index.

*/
function solve(arr) {
  let result = "no";
  for (let i = 0; i < arr.length; i++) {
    let leftSum = 0;
    let rightSum = 0;
    for (let j = 0; j < i; j++) {
      leftSum += arr[j];
    }
    for (let k = arr.length - 1; k > i; k--) {
      rightSum += arr[k];
    }
    if (leftSum === rightSum) {
      result = i;
      break;
    }
  }
  console.log(result);
}
