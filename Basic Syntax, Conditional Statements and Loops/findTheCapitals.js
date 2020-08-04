/*
Instructions
Write a function that takes a single string (word) as argument.
The function must return an ordered list containing the indexes of all capital letters in the string.
*/
function capitals(word) {
    let resultArr = [];

    for (let i = 0; i < word.length; i++) {
        let letter = word[i];

        if (letter === letter.toUpperCase()) {
            resultArr.push(i);
        }
    }

    console.log(resultArr);

};

capitals('StringAreImmutable!')
