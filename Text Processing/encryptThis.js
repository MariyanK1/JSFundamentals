/*

Here are the conditions:

Your message is a string containing space separated words.

You need to encrypt each word in the message using the following rules:
The first letter needs to be converted to its ASCII code.
The second letter needs to be switched with the last letter
Keepin' it simple: There are no special characters in input.

*/

function encryptThis(text) {

    let arr = text.split(' ');
    let resultArr = [];
    for (const word of arr) {
        let charCode = word.charCodeAt(0);

        if (word[1] && word[word.length - 1]) {
            let newWord = '';
            if (word.length <= 2) {
                newWord += charCode + word[word.length - 1];
            }
            else if (word.length > 3) {
                newWord += charCode + word[word.length - 1] + word.substring(2, word.length - 1) + word[1];
            }

            else {
                newWord += charCode + word[word.length - 1] + word[1];
            }

            resultArr.push(newWord);
          
        } else {
            resultArr.push(charCode)
        }
    }
    return resultArr.join(' ')
}
