/*
Write a function that counts the times each word occurs in a text. 
Print the words sorted by count in descending order. 
The input comes as an array of strings.
Sample case:
In:
["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence",
"And", "finally", "the", "third", "sentence"]
Out:
sentence -> 3 times
Here -> 2 times
is -> 2 times
the -> 2 times
first -> 1 times
another -> 1 times
And -> 1 times
finally -> 1 times
third -> 1 times
*/

function slv(input) {

    let map = new Map();

    for (const x of input) {

        if (!map.has(x)) {
            map.set(x, 1);
        } else {
            let value = map.get(x);
            map.set(x, value += 1);
        }
    }

    let result = Array.from(map).sort((a, b) => b[1] - a[1]).forEach(el => {
        console.log(`${el[0]} -> ${el[1]} times`)});
}
