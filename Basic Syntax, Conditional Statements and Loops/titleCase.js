/*
Return the provided string with the first letter of each word capitalized.
Make sure the rest of the word is in lower case.

For the purpose of this exercise, you should also capitalize connecting words like "the" and "of".
*/

function titleCase(str) {
    let input = str.toLowerCase().split(' ');
    let newStr = ''
    for (const word of input) {
        let tokens = word.split('');
        let fistLetter = tokens.shift().toUpperCase();
        newStr += fistLetter + tokens.join('') + ' ';
    }

    return newStr.trim();
}

titleCase("I'm a little tea pot");

/*
titleCase("I'm a little tea pot") should return I'm A Little Tea Pot.
*/
