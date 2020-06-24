/*
Write a function, which receives two parameters. 
The first parameter will be a string with some words separated by ', '.
The second parameter will be a string which contains templates containing '*'.
Find the word with exact same length as the template and replace it.
*/

function solve(input) {

    let words = input.split(' ');
    let result = [];

   
    function isValid(word) {
        if (word.startsWith('#') && word.length > 1 && hasOnlyLetters(word.substring(1))) {
            return true;
        }

        return false;
    }

    function hasOnlyLetters(word) {
        word = word.toLowerCase();

        for (let i = 0; i < word.length; i++) {
            if (word.charCodeAt(i) < 97 ||
                word.charCodeAt(i) > 122) {
                return false;
            }

        }

        return true;
    }

    words.forEach(word => {
        if (isValid(word)) {
            result.push(word.slice(1))
        }
    });


    console.log(result.join('\n'));
}

solve('Nowadays everyone uses # to tag a #special word in #socialMedia')
