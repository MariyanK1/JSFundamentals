/*

10. *Legendary Farming
You’ve beaten all the content and the last thing left to accomplish is own a legendary item. However, it’s a tedious process and requires quite a bit of farming. Anyway, you are not too pretentious – any legendary will do.

The possible items are:
Shadowmourne – requires 250 Shards;
Valanyr – requires 250 Fragments;
Dragonwrath – requires 250 Motes;

Shards, Fragments and Motes are the key materials, all else is junk.

You will be given as a string, such as 2 motes 3 ores 15 stones. Keep track of the key materials - the first that reaches the 250 mark wins the race. At that point, print the corresponding legendary obtained.

Then, print the remaining shards, fragments, motes, ordered by quantity in descending order, then by name in ascending order, each on a new line.

Finally, print the collected junk items, in alphabetical order.

Input
Input is a string  in format {quantity} {material} {quantity} {material} … {quantity} {material}

Output
On the first line, print the obtained item in format {Legendary item} obtained!
On the next three lines, print the remaining key materials in descending order by quantity
If two key materials have the same quantity, print them in alphabetical order
On the final several lines, print the junk items in alphabetical order
All materials are printed in format {material}: {quantity}
All output should be lowercase, except the first letter of the legendary

Examples

Input	
'3 Motes 5 stones 5 Shards 6 leathers 255 fragments 7 Shards'

Output
Valanyr obtained!
fragments: 5
shards: 5
motes: 3
leathers: 6
stones: 5

Input	
'123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver'

Output
Dragonwrath obtained!
shards: 22
motes: 19
fragments: 0
fangs: 9
silver: 123


*/


function farming(str = '') {
    let input = str.toLowerCase().split(' ');
    let legendary = {fragments: 0, shards: 0, motes: 0};
    let junk = {}
    let hasToBreak = false;
    while (!hasToBreak) {
        let quantity = +input.shift();
        let material = input.shift();

        switch (material) {
            case 'shards':
                if (!legendary.hasOwnProperty(material)) {
                    legendary[material] = quantity;
                    if (legendary[material] >= 250) {
                        console.log(`Shadowmourne obtained!`);
                        if (legendary[material] > 250) {
                            legendary[material] -= 250
                        }
                        hasToBreak = true;
                    }
                } else {
                    legendary[material] += quantity;
                    if (legendary[material] >= 250) {
                        console.log(`Shadowmourne obtained!`);
                        if (legendary[material] > 250) {
                            legendary[material] -= 250
                        }
                        hasToBreak = true;
                    }
                }
                break;
            case 'fragments':
                if (!legendary.hasOwnProperty(material)) {
                    legendary[material] = quantity;
                    if (legendary[material] >= 250) {
                        console.log(`Valanyr obtained!`);
                        if (legendary[material] > 250) {
                            legendary[material] -= 250
                        }
                        hasToBreak = true;
                    }
                } else {
                    legendary[material] += quantity;
                    if (legendary[material] >= 250) {
                        console.log(`Valanyr obtained!`);
                        if (legendary[material] > 250) {
                            legendary[material] -= 250
                        }
                        hasToBreak = true;
                    }
                }
                break;
            case 'motes':
                if (!legendary.hasOwnProperty(material)) {
                    legendary[material] = quantity;
                    if (legendary[material] >= 250) {
                        console.log(`Dragonwrath obtained!`);
                        if (legendary[material] > 250) {
                            legendary[material] -= 250
                        }
                        hasToBreak = true;
                    }
                } else {
                    legendary[material] += quantity;
                    if (legendary[material] >= 250) {
                        console.log(`Dragonwrath obtained!`);
                        if (legendary[material] > 250) {
                            legendary[material] -= 250
                        }
                        hasToBreak = true;
                    }
                }
                break;
            default:
                if (!junk.hasOwnProperty(material)) {
                    junk[material] = quantity;

                } else {
                    junk[material] += quantity;

                }
                break;
        }
    }
    let legendItems = Object.entries(legendary).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0])).forEach(item => {
        console.log(`${item[0]}: ${item[1]}`);
    });

    let junkItems = Object.entries(junk).sort((a, b) => a[0].localeCompare(b[0])).forEach(item => {
        console.log(`${item[0]}: ${item[1]}`);
    });
}
farming('123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver')
