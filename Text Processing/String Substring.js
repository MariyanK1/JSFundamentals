/*
The input will be given as two separated strings.
Write a function that checks given text for containing a given word. 
The comparison should be case insensitive. Once you find match, print the word and stop the program. 
If you don't find the word print "{word} not found!"
*/
function solve(inputWord, sentence) {
    sentence = sentence.toLowerCase().split(' ');
    inputWord = inputWord.toLowerCase();

    for (const word of sentence) {
        if (inputWord === word) {
            console.log(`${word}`);
            return;
        }
    }

    console.log(`${inputWord} not found!`);
}

solve('javascript',
    'JavaScript is the best programming language')
