/*
Create a function which creates a register for heroes, with their names, level, and items (if they have such). 
The input comes as array of strings. Each element holds data for a hero, in the following format:
“{heroName} / {heroLevel} / {item1}, {item2}, {item3}...” 

You must store the data about every hero. The name is a string, the level is a number and the items are all strings.
The output is all of the data for all the heroes you’ve stored sorted ascending by level and the items are sorted alphabetically. The data must be in the following format for each hero:

Hero: {heroName}
level => {heroLevel}
Items => {item1}, {item2}, {item3}

Sample case:

In:
[
"Isacc / 25 / Apple, GravityGun",
"Derek / 12 / BarrelVest, DestructionSword",
"Hes / 1 / Desolator, Sentinel, Antara"
]

Out:
Hero: Hes
level => 1
items => Antara, Desolator, Sentinel
Hero: Derek
level => 12
items => BarrelVest, DestructionSword
Hero: Isacc
level => 25
items => Apple, GravityGun

*/
function solve(input = []) {
    let arr = [];
    while (input.length > 0) {
        let line = input.shift().split(' / ');
        let hero = {
            name: line[0],
            level: +line[1],
            items: line[2]
                .split(', ')
                .sort((a, b) => a.localeCompare(b))
                .join(', ')
        }
        arr.push(hero)
        arr.sort((a, b) => a.level - b.level)
    }

    let output = [];

    for (let hero of arr) {
        let str = `Hero: ${hero.name}\nlevel => ${hero.level}\nitems => ${hero.items}`;
        output.push(str)
    }
    console.log(output.join('\n'));
}
