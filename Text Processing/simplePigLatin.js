/*
Move the first letter of each word to the end of it, then add "ay" to the end of the word.
Leave punctuation marks untouched.
*/

function pigIt(str) {
    let arr = str.split(' ');
    let resultArr = [];

    for (const word of arr) {
        if (word === '!' || word === '?') {
            resultArr.push(word);
            break;
        }
        let wordTransform = word.substring(1, word.length) + word[0] + 'ay';
        resultArr.push(wordTransform);
    }

    return resultArr.join(' ')

}
