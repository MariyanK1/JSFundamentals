/*
You are given a secret message you need to decipher. Here are the things you need to know to decipher it:

For each word:

the second and the last letter is switched (e.g. Hello becomes Holle)
the first letter is replaced by its character code (e.g. H becomes 72)
Note: there are no special characters used, only letters and spaces
*/

function decipherThis(str) {
    str = str.split(' ');
    let resultArr = [];

    for (const word of str) {
        let digits = +word.match(/\d/g).join('');
        let newChar = String.fromCharCode(digits);
        let match;
        let newWord;

        if (word.match(/[a-z]/g)) {
            match = word.match(/[a-z]/g).join('');
            newWord = newChar + match;
            newWord = newWord.split('');
            if (newWord.length > 1) {
                let temp = newWord[newWord.length - 1];
                newWord[newWord.length - 1] = newWord[1];
                newWord[1] = temp;
                newWord = newWord.join('')
                resultArr.push(newWord)

            }

        } else {
            resultArr.push(newChar);
        }

    }

    return resultArr.join(' ');
};

decipherThis('72eva 97 103o 97t 116sih 97dn 115ee 104wo 121uo 100o');
                /*Have a go at this and see how you do*/
