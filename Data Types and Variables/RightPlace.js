/*
You will receive 3 parameters (string, char, string).
First string will be a word with a missing char replaced with a underscore '_'
You have to replace the character with the missing part (underscore) from the first string and
compare the result with the second string.

If they are equals you should print "Matched", otherwise print "Not Matched".

*/

function solve(str, char, result) {
    let res = str.replace('_',char);
    let output = res === result ? 'Matched' : 'Not Matched';
    console.log(output);
}
