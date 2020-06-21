/*
Write a function that finds the longest sequence of equal elements in an array of numbers. 
If several longest sequences exist, print the leftmost one.

*/

function solve(arr) {
  let longestsec = [];
  let resultsec = [];
  let count = 1;
  let maxcount = 1;
  for (i = 0; i < arr.length; i++) {
    if (count === 1) {
      resultsec.push(arr[i]);
    }
    if (arr[i] === arr[i + 1]) {
      count++;
      resultsec.push(arr[i]);
      if (count > maxcount) {
        longestsec = resultsec;
        maxcount = count;
      }
    } else {
      resultsec = [];
      count = 1;
    }
  }
  console.log(longestsec.join(" "));
}
