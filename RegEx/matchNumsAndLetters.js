/*
Create a single regex that matches a range of letters between h and s,
and a range of numbers between 2 and 6. Remember to include the appropriate flags in the regex.
*/

let sentence = "Blueberry 3.141592653s are delicious.";
let myRegex = /([h-s2-6])/gi;
let result = sentence.match(myRegex);

console.log(result);
