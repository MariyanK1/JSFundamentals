/*
Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".

Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien".
*/


function mutation(arr = []) {
    let inputWord = arr.shift().toLowerCase();
    let targetWord = arr.shift().toLowerCase();

    let hasLetter = false;
    for (let i = 0; i < targetWord.length; i++) {
        const letter = targetWord[i];

        if (inputWord.includes(letter)) {
            hasLetter = true;
        } else {
            hasLetter = false;
            return hasLetter;
        }
    }
    return hasLetter
}

mutation(["hello", "Hello"]);
//mutation(["floor", "for"]) should return true.
