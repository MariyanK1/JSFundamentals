//Write a function that receives a text and a string that you need to search.
//Print all the occurrences of that word in the string.

function solve(text = String, searchedWord) {
    let words = text.split(' ');
    let counter = 0;

    for (const word of words) {
        if (word === searchedWord) {
            counter++;
        }
    }

    console.log(counter);
}

solve("This is a word and it also is a sentence",
    "is")