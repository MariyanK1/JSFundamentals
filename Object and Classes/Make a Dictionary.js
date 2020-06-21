/*
You will receive an array with strings in the form of JSON's. 
You have to parse these strings and combine them into one object.
Every string from the array will hold terms and a description.
If you receive the same term twice replace it with the new definition.

Print every term and definition in that dictionary on new line in format:
Term: ${term} => Definition: ${definition}

Don't forget to sort the dictionary alphabetically by the terms as in real dictionaries.

Sample case:

In:
[
'{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
'{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed 
route and for a fare."}',
'{"Boiler":"A fuel-burning apparatus or container for heating water."}',
'{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
'{"Microphone":"An instrument for converting sound waves into electrical energy variations which may 
then be amplified, transmitted, or recorded."}'
]

Out:

Term: Boiler => Definition: A fuel-burning apparatus or container for heating water.
Term: Bus => Definition: A large motor vehicle carrying passengers by road, typically one 
serving the public on a fixed route and for a fare.
Term: Coffee => Definition: A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub.
Term: Microphone => Definition: An instrument for converting sound waves into electrical energy 
variations which may then be amplified, transmitted, or recorded.
Term: Tape => Definition: A narrow strip of material, typically used to hold or fasten something.


*/
function solve(input) {
    let dictionary = {};
    for (let i = 0; i < input.length; i++) {
        let el = JSON.parse(input[i]);
        let entry = Object.entries(el)[0];
        dictionary[entry[0]] = entry[1]
    }

    let sortedDic = {};

    for (const key of Object.keys(dictionary).sort((a, b) => a.localeCompare(b))) {
        sortedDic[key] = dictionary[key];
    }

    for (const term in sortedDic) {
        if (sortedDic.hasOwnProperty(term)) {
            const def = sortedDic[term];
            console.log(`Term: ${term} => Definition: ${def}`);
        }
    }
}
