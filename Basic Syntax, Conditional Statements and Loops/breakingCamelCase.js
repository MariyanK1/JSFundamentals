/*
Complete the solution so that the function will break up camel casing, using a space between words.

Example
solution("camelCasing")  ==  "camel Casing"
*/
function solution(string) {
    let input = [...string];
    for (let i = 0; i < input.length; i++) {
        const letter = input[i];

        if (letter === letter.toUpperCase()) {
            input[i - 1] += ' ';
        }
    }

    return input.join('');
}
