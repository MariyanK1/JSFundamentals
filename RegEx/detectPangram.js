/*
A pangram is a sentence that contains every single letter of the alphabet at least once.
For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.
*/


function isPangram(string) {
    string = string.toLowerCase();
    let obj = {};

    for (let i = 0; i < string.length; i++) {
        const el = string[i];
        if (el.match(/[a-z]/)) {
            obj.hasOwnProperty(string[i])
            ? obj[string[i]]++
            : obj[string[i]] = 0;
        }
    }

    let arr = Object.entries(obj);

    return arr.length === 26 ? true : false; 

}
