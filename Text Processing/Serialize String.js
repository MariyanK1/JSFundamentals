/*
You have been tasked to serialize a string. The serialization is done in a special way, in which a character from that 
string is saved with the indexes at which it is found.

The input will consist of a single input line, containing a single string, which may consist of ANY ASCII character.

Your task is to serialize the string in the following way:
{char}:{index1}/{index2}/{index3}

The char will be the character, and the indexes, will be the indexes it is found at in the string.

Sample case:

In:
abababa

Out:
a:0/2/4/6
b:1/3/5

*/

function solve(input = []) {

    let inputString = String(input.shift());
    let obj = {};

    for (let index = 0; index < inputString.length; index++) {
        const char = inputString[index];
        if (!obj.hasOwnProperty(char)) {
            obj[char] = [index];
        } else {
            obj[char].push(index)
        }
    }


    for (const key in obj) {
        console.log(`${key}:${obj[key].join('/')}`);
    }
}


solve([ 'abababa', '' ]);
