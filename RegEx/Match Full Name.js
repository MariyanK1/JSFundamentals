/*
Write a JavaScript function to match full names from a list of names and print them on the console.

First, write a regular expression to match a valid full name, according to these conditions:
⦁	A valid full name has the following characteristics:
⦁	It consists of two words.
⦁	Each word starts with a capital letter.
⦁	After the first letter, it only contains lowercase letters afterwards.
⦁	Each of the two words should be at least two letters long.
⦁	The two words are separated by a single space.

*/

function solve(input) {

    let pattern = /\b[A-Z][a-z]+[ ][A-Z][a-z]+\b/g;

    let validNames = [];

    let validName = null;

    while ((validName = pattern.exec(input)) !== null) {

        validNames.push(validName[0]);

    }

    console.log(validNames.join(' '));

}

solve([
    'Ivan Ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Test Testov, Ivan\tIvanov'
])
