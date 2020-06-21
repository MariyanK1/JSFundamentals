/*
Write a function that receives list of neighborhoods and then some people, who are going to live in it.
The input will come as array of strings. The first element will be the list of neighborhoods separated by ", ".
The rest of the elements will be a neighborhood followed by a name of a person in the format "{neighborhood} - {person}".
Add the person to the neighborhood only if the neighborhood is in the list of neighborhoods.
At the end print the neighborhoods sorted by the count of inhabitants in descending order.

Print them in the following format: 
"{neighborhood}: {inhabitants count}
--{1st inhabitant}
--{2nd inhabitant}
…"

Sample case:

In:

['Abbey Street, Herald Street, Bright Mews',
'Bright Mews - Garry',
'Bright Mews - Andrea',
'Invalid Street - Tommy',
'Abbey Street - Billy']

Out:

Bright Mews: 2
--Garry
--Andrea
Abbey Street: 1
--Billy
Herald Street: 0

*/
function neighborhood(input = []) {
    let map = new Map();
    input.shift()
        .split(', ')
        .forEach(el => map.set(el, []));

    for (let line of input) {
        let [neighborhood, inhabitant] = line.split(' - ');

        if (map.has(neighborhood)) {
            map.get(neighborhood).push(inhabitant)
        }
    }
    let sort = Array.from(map.entries()).sort((a, b) => b[1].length - a[1].length);

    let result = new Map(sort);

    for (let [name, inhabitants] of result) {
        console.log(`${name}: ${inhabitants.length}`);
        inhabitants.forEach(person => console.log(`--${person}`));
    }
}
