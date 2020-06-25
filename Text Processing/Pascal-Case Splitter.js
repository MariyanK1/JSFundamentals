/*
You will receive a single string. 
This string is written in PascalCase format.

Your task here is to split this string by every word in it. 
Print them joined by comma and space.
*/

function solve(input) {

    let capitalIndex = -1;
    let output = [];

    for (let i = 0; i < input.length; i++) {
        const letter = input[i];
        if (letter.toLowerCase() !== letter && i !== 0) {
            let word = input.substring(capitalIndex, i);
            capitalIndex = i;
            output.push(word)
        }
    }
    output.push(input.substring(capitalIndex))
    console.log(output.join(', '))

}

solve('SplitMeIfYouCanHaHaYouCantOrYouCan')
