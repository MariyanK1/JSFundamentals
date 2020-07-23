/*
You are tasked to create a catalogue of usernames.
The usernames will be strings that may contain any ASCII character.
You need to order them by their length, in ascending order, as first criteria, and by alphabetical order as second criteria. 

Input
The input comes as array of strings. Each element represents a username.
Sometimes the input may contain duplicate usernames. Make it so that there are NO duplicates in the output.

Output
The output is all of the usernames, ordered exactly as specified above – each printed on a new line.


*/


function solve(input = []) {
    let map = new Map;

    for (const name of input) {
        if (!map.has(name)) {
            map.set(name, 0)
        }
    }

    let final = 
    Array.from(map.keys())
    .sort((a, b) => a.length - b.length || a.localeCompare(b))
    .forEach(el => console.log(el))
}
