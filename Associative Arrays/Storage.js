/*
Write a function that takes a certain number of items and their quantity.
If the same item appears more than once, add the new amount to the existing one.
At the end print all the items and their amount without sorting them.
The input comes as array of strings. Try using a Map().

Sample case:

In:
['tomatoes 10',
'coffee 5',
'olives 100',
'coffee 40']

Out:
tomatoes -> 10
coffee -> 45
olives -> 100

*/
function strg(input) {
let map = new Map();

for (const x of input) {
    let tokens = x.split(' ');
    let name = tokens[0];
    let qnt = +tokens[1];

    if (!map.has(name)) {
        map.set(name, qnt);
    } else {
        let oldValue = map.get(name);
        map.set(name, qnt += oldValue)
    }
}

for (const item of map) {
    console.log(`${item[0]} -> ${item[1]}`);
}
}
