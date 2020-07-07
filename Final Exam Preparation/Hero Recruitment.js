/*
Greetings, champions of Azeroth. Welcome to the Chapels.
Here, we will test your skill and knowledge to decide if you are ready to defend our beloved world.
I wish you luck champions. For Honour and Glory!

Create a program that keeps track of enrolled heroes and their collection of spells (spellbook).

You will be receiving the following commands until you receive the command "End":

"Enroll {HeroName}":
Adds the hero to your collection of heroes.
If the hero is already present in your collection, print: "{HeroName} is already enrolled."

"Learn {HeroName} {SpellName}":
Adds the {SpellName} to the {HeroName}'s spellbook.
If the {HeroName} doesn’t exist in the collection, print: "{HeroName} doesn't exist."
If the hero already has the spell in his spellbook print: "{HeroName} has already learnt {SpellName}."

"Unlearn {HeroName} {SpellName}":
Remove the {SpellName} from the {HeroName}'s spellbook.
If the {HeroName} doesn’t exist in the collection, print: "{HeroName} doesn't exist."
If the {SpellName} doesn't exist in the hero's spellbook, print: "{HeroName} doesn't know {SpellName}."

After you receive the "End" command, print all the heroes sorted by their count of spells in
descending and then by the hero name ascending in the format described below:

"Heroes:
== {name1}: {spell1}, {spell2}, {spelln}
== {name2}: {spell1}, {spell2}, {spelln}
...
== {nameN}: {spell1}, {spell2}, {spelln}

Input / Constraints
You will be receiving lines until you receive the "End" command.

Output
Print the heroes in the format described above.

Sample Case:

In:
Enroll Stefan
Learn Stefan ItShouldWork
Learn Stefan ItShouldWork
Unlearn Stefan NotFound
End

Out:
Stefan has already learnt ItShouldWork.
Stefan doesn't know NotFound.
Heroes:
== Stefan: ItShouldWork

*/

function heroes(input = []) {
    let resultObj = {};

    for (const line of input) {
        let [command, name, spell] = line.split(' ');

        switch (command) {
            case 'Enroll':
                if (!resultObj.hasOwnProperty(name)) {
                    resultObj[name] = [];
                } else {
                    console.log(`${name} is already enrolled.`);
                }
                break;

            case 'Learn':
                if (!resultObj.hasOwnProperty(name)) {
                    console.log(`${name} doesn't exist.`);
                }
                else if (!resultObj[name].includes(spell)) {
                    resultObj[name].push(spell);
                }
                else if (resultObj[name].includes(spell)) {
                    console.log(`${name} has already learnt ${spell}.`);
                }
                break;

            case 'Unlearn':
                if (!resultObj.hasOwnProperty(name)) {
                    console.log(`${name} doesn't exist.`);
                } else if (resultObj[name] === undefined || !resultObj[name].includes(spell)) {
                    console.log(`${name} doesn't know ${spell}.`);
                } else if (resultObj[name].includes(spell)) {
                    resultObj[name].splice(resultObj[name].indexOf(spell), 1);
                }
                break;

            default:
                break;
        }
    }
    let arrayResult = Object.entries(resultObj).sort((a, b) => b[1].length - a[1].length || a[0].localeCompare(b[0]))

    console.log('Heroes:')
    for (const line of arrayResult) {
        console.log(`== ${line[0]}: ${line[1].join(', ')}`);
    }
}
