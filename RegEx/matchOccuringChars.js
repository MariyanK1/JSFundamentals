/*
You want to find matches when the letter s occurs one or more times in "Mississippi".
*/

let difficultSpelling = "Mississippi";
let myRegex = /(s+)/;
let result = difficultSpelling.match(myRegex);
