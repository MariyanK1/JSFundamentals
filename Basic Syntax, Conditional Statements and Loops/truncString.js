/*
Truncate a string (first argument) if it is longer than the given maximum string length (second argument).
Return the truncated string with a ... ending.

*/

function truncateString(str, num) {
    let newStr = '';
    for (let i = 0; i < num; i++) {
        newStr += str[i];
    }

    if (num > str.length) {
       return str
   } 
    if (newStr.length === str.length) {
       return newStr;
   } else {
       return newStr + '...';
   }
}

truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2)
