/*Write a function to find all the top integers in an array. A top integer is an integer which is 
bigger than all the elements to its right.*/

function solve(arr = []) {
  let resultArr = [];

  for (let i = 0; i < arr.length; i++) {
    let isTopInt = true;
    let current = arr[i];
    let rightEl = arr.slice(i + 1);

    for (let j = 0; j < rightEl.length; j++) {
      if (current <= rightEl[j]) {
        isTopInt = false;
        break;
      }
    }
    if (isTopInt) {
      resultArr.push(current);
    }
  }

  console.log(resultArr.join(" "));
}

