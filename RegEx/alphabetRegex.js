/*
Match all the letters in a string.

Note
Be sure to match both upper- and lowercase letters.

*/

let sentence = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /([a-z])/gi;
let result = sentence.match(alphabetRegex);

console.log(result);
