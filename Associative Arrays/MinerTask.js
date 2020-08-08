/*

You are given an array of strings. Every odd string is representing a 
resource (e.g. Gold, Silver, Copper, and so on), and every even – quantity. 

Your task is to collect the resources and print them each on a new line. 

Print the resources and their quantities in format:
{resource} –> {quantity}
The quantities inputs will be in the range [1 … 2 000 000 000]

*/

function minerTask(input = []) {
    
    let map = new Map();

    for (let i = 0; i < input.length; i++) {
        if (i % 2 === 0 && !map.has(input[i])) {
            map.set(input[i], +input[i + 1])
        }
        else if (i % 2 === 0 && map.has(input[i])) {
            map.set(input[i], Number(input[i + 1]) + map.get(input[i]));
        }
    }

    for (let key of map) {
        console.log(`${key[0]} -> ${key[1]}`);
    }

}
