/*
Write a function that receives two characters and prints on a single line all the characters in between them 
according to the ASCII code. 

Keep in mind that the second character code might be before the first one inside the ASCII table.
*/

function solve(start, end) {
  let startVal = start.charCodeAt(0);
  let endVal = end.charCodeAt(0);

  if (startVal > endVal) {
    let temp = startVal;
    startVal = endVal;
    endVal = temp;
  }

  let res = "";
  for (let i = startVal + 1; i < endVal; i++) {
    res += String.fromCharCode(i) + " ";
  }

  console.log(res);
}
