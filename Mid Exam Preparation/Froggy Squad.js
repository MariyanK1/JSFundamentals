/*
Create a program that helps you keep track of the frogs that are on the riverside.
Because you are an extreme animal lover, you also name them.

You will receive the names of the frogs that are already on the riverside on a single line, separated by a single space in the following format:

"{frog1} {frog2} {frog3}… {frogn}"

Then you will receive commands that describe their action. There are five possible commands:
⦁	"Join {name}":
A frog comes on the riverside and you need to add it in the end of your collection. Frog names will never repeat.

⦁	"Jump {name} {index}"
A frog jumps out of the water and joins the other frogs. You need to add it in your collection on the given index, if the index exists.

⦁	"Dive {index}":
The frog on the given index has decided to jump into the water. You have to remove it from your collection, if the index exists.

⦁	"First/Last {count}":
Print the first/last {count} frogs separated by a single space. If the count requested is more than the frogs- just print them to the end.
"{frog} {frog} {frog}"

⦁	"Print Normal/Reversed"
Print the names of the frogs in your collection in normal (in the order they have been added) or reversed order in the format described below, then stop the program:
"Frogs: {frog1} {frog2}… {frogn}"

Input
⦁	On the 1st line, you will receive the starting list with the names of the frogs separated by a single space.

⦁	On the next lines, you will receive commands in the format described above.
Output

⦁	Print the list after the manipulations upon the "Print" command in the format described above.

Sample case:

In:
Blake Muggy Kishko
Join Kvachko
Dive 0
First 10
Print Reversed

Out:
Muggy Kishko Kvachko
Frogs: Kvachko Kishko Muggy

*/

function froggySquad(arr) {
    let output = '';
    let names = arr.shift().split(' ');
    for (let iterator of arr) {
        let command = iterator.split(' ');
        let firstWord = command.shift();
        let secondWord = command.shift();
 
        if (firstWord === 'Join') {
            names.push(secondWord);
        } else if (firstWord === 'Jump') {
            let num = command.shift();
            if (num >= 0 && num <= names.length) {
                names.splice(Number(num), 0, secondWord);
            }
        } else if (firstWord === 'Dive') {
            let num = Number(secondWord);
            if (num >= 0 && num < names.length) {
                names.splice(num, 1);
            }
        } else if (firstWord === 'First') {
            let count = Number(secondWord);
            console.log(names.slice(0, count).join(' '));
 
        } else if (firstWord === 'Last') {
            let count = Number(secondWord);
            console.log(names.slice(-count).join(' '));
 
        } else if (firstWord === 'Print') {
            if (secondWord === 'Reversed') {
                output = `Frogs: ${names.reverse().join(' ')}`;
            } else if (secondWord === 'Normal') {
                output = `Frogs: ${names.join(' ')}`;
            }
            console.log(output);
        }
    }
}
