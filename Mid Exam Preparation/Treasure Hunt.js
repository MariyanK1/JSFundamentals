/*
The pirates need to carry a treasure chest safely back to the ship. Looting along the way.
Create a program that manages the state of the treasure chest along the way.
On the first line you will receive the initial loot of the treasure chest,
which is a string of items separated by a '|'.

"{loot1}|{loot2}|{loot3}… {lootn}"

The following lines represent commands until "Yohoho!" which ends the treasure hunt:
⦁Loot {item1} {item2}…{itemn} – pick up treasure loot along the way.
Insert the items at the beginning of the chest. If an item is already contained don't insert it.

⦁Drop {index} – remove the loot at the given position and add it at the end of the treasure chest.
If the index is invalid skip the command.

⦁Steal {count} – someone steals the last count loot items.
If there are less items than the given count remove as much as there are.
Print the stolen items separated by ', ':
{item1}, {item2}, {item3} … {itemcount}

In the end output the average treasure gain which is the sum of all treasure
items length divided by the count of all items inside the chest
formatted to the second decimal point:
"Average treasure gain: {averageGain} pirate credits."

If the chest is empty print the following message:
"Failed treasure hunt."

Input
⦁On the 1st line you are going to receive the initial treasure chest (loot separated by '|')
⦁On the next lines, until "Yohoho!", you will be receiving commands.

Output
⦁Print the output in the format described above.

Constraints
⦁The loot items will be strings containing any ASCII code.
⦁The indexes will be integers in the range [-200…200]
⦁The count will be an integer in the range [1….100]
*/


function solve(input = []) {
    let initialLoot = input.shift().split('|');
    let commands;

    while ((commands = input.shift()) !== 'Yohoho!') {
        let tokens = commands.split(' ');
        let command = tokens.shift();

        while (tokens.length !== 0 && command === 'Loot') {
            let el = tokens.shift();

            if (initialLoot.indexOf(el) === -1) {
                initialLoot.unshift(el);
            }
        }

        if (command === 'Drop') {
            let i = +tokens[0];
            let e = ''
            if (i < initialLoot.length && i >= 0) {
                e += initialLoot.splice(i, 1);
                initialLoot.push(e)
            }
        } else if (command === 'Steal') {
            let count = +tokens[0];
            let counter = 0;
            let theft = [];
            while (counter !== count) {
                counter++;
                let stolen = initialLoot.splice(initialLoot.length - 1, count);
                theft.push(stolen);
            }
            console.log(theft.reverse().join(', '));
        }
    }
    let sum = 0
    let count = initialLoot.map(x => x.length);
    for (let i = 0; i < initialLoot.length; i++) {
        sum += count[i]
    }
    if (initialLoot.length > 0) {
        let finalSum = sum / initialLoot.length;
        console.log(`Average treasure gain: ${finalSum.toFixed(2)} pirate credits.`);
    } else {
        console.log("Failed treasure hunt.");
    }
}
