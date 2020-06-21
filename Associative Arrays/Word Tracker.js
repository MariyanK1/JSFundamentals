/*
Write a function that receives an array of words and finds occurrences of given words in that sentence. 
The input will come as array of strings. The first string will contain the words you will be looking for separated by a space.
All strings after that will be the words you will be looking for. 
Print for each word how many times it occurs. The words should be sorted by count in descending.

Sample case:

In:
[
'this sentence', 'In','this','sentence','you','have','to','count','the','occurances','of','the'
,'words','this','and','sentence','because','this','is','your','task'
]

Out:

this - 3
sentence - 2

*/

function solve(input) {
    let words = input.shift().split(' ');
    let map = {};

    words.forEach(x => {
        map[x] = 0;
    })

    input.forEach(word => {
        if (words.includes(word)) {
            map[word]++;
        }
    })

    Object.entries(map).sort((a, b) => b[1] - a[1]).forEach(entry => {
        console.log(`${entry[0]} - ${entry[1]}`);
    })
}
