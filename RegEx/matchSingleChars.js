/*
Create a single regex that matches all characters that are not a number or a vowel.
Remember to include the appropriate flags in the regex.
*/

let quote = "3 blind mice.";
let myRegex = /([^\daeiou])/gi;
let result = quote.match(myRegex);

console.log(result);
