/*
Write a function that stores information about a person’s name and his phone number.
The input comes as an array of strings. Each string contains the name and the number.
If you receive the same name twice just replace the number. At the end print the result without sorting it.
Try using an associative array.

Sample case:

In:
['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344']

Out:
Tim -> 0876566344
Peter -> 0877547887
Bill -> 0896543112

*/
function slv(input) {
    let map = new Map();

    for (const x of input) {
        let tokens = x.split(' ')
        if (!map.has(tokens[0])) {
            map.set(tokens[0], tokens[1])
        } else {
            map.get(tokens[0])
            map.set(tokens[0], tokens[1]);
        }
    }

    for (const iterator of map) {
        console.log(`${iterator[0]} -> ${iterator[1]}`);
    }
}
