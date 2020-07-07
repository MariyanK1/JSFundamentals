/*
You got your hands on the most recent update on the best MMORPG of all time – Heroes of Code and Logic.
You want to play it all day long! So cancel all other arrangements and create your party!

On the first line of the standard input you will receive an integer n – the number of heroes
that you can choose for your party.

On the next n lines, the heroes themselves will follow with their hit points and mana points
separated by empty space in the following format: 
{hero name} {HP} {MP} 
where HP stands for hit points and MP for mana points
a hero can have a maximum of 100 HP and 200 MP
After you have successfully picked your heroes, you can start playing the game.

You will be receiving different commands, each on a new line, separated by " – ",
until the "End" command is given. 

There are several actions that can be performed by the heroes:

CastSpell – {hero name} – {MP needed} – {spell name} 
If the hero has the required MP, he casts the spell, thus reducing his MP. Print this message: 
"{hero name} has successfully cast {spell name} and now has {mana points left} MP!"
If the hero is unable to cast the spell print:
"{hero name} does not have enough MP to cast {spell name}!"

TakeDamage – {hero name} – {damage} – {attacker}
Reduce the hero HP by the given damage amount. If the hero is still alive (his HP is greater than 0) print:
"{hero name} was hit for {damage} HP by {attacker} and now has {current HP} HP left!"
If the hero has died, remove him from your party and print:
"{hero name} has been killed by {attacker}!"

Recharge – {hero name} – {amount}
The hero increases his MP. If a command is given that would bring the MP of the hero above 200,
MP is increased so that it reaches the maximum. Print the following message:
"{hero name} recharged for {amount recovered} MP!"

Heal – {hero name} – {amount}
The hero increases his HP. If a command is given that would bring the HP of the hero above 100,
HP is increased so that it reaches the maximum. Print the following message:
"{hero name} healed for {amount recovered} HP!"

Input
On the first line of the standard input you will receive an integer n
On the next n lines, the heroes themselves will follow with their hit points
and mana points separated by empty space in the following format
You will be receiving different commands, each on a new line,
separated by " – ", until the "End" command is given

Output
Print all members of your party who are still alive, sorted by their HP in descending order,
then by their name in ascending order,in the following format (their HP/MP need to be indented 2 spaces):

"{hero name}
 	 HP: {current HP}
 MP: {current MP}
 ..."

Constraints
The starting HP/MP of the heroes will be valid, 32-bit integers, will never be negative or exceed the respective limits.
The HP/MP amounts in the commands will never be negative.
The hero names in the commands will always be valid members of your party. No need to check that explicitly


Sample Case:

In:
4
Adela 90 150
SirMullich 70 40
Ivor 1 111
Tyris 94 61
Heal - SirMullich - 50
Recharge - Adela - 100
CastSpell - Tyris - 1000 - Fireball
TakeDamage - Tyris - 99 - Fireball
TakeDamage - Ivor - 3 - Mosquito
End

Out:
SirMullich healed for 30 HP!
Adela recharged for 50 MP!
Tyris does not have enough MP to cast Fireball!
Tyris has been killed by Fireball!
Ivor has been killed by Mosquito!
SirMullich
  HP: 100
  MP: 40
Adela
  HP: 90
  MP: 200
*/


function solve(input = []) {
    let inputN = Number(input.shift());
    let heroesObj = {};
    for (let i = 0; i < inputN; i++) {
        let [heroName, HP, MP] = input.shift().split(' ');
        if (!heroesObj.hasOwnProperty(heroName)) {
            heroesObj[heroName] = ['HP', Number(HP), 'MP', Number(MP)];
        }
    }

    let newInput = input.slice(0, input.indexOf('End'));

    for (const line of newInput) {
        let [command, name, value1, value2] = line.split(' - ');

        switch (command) {
            case 'Heal':
                let amount = Number(value1);
                if (heroesObj[name][1] + amount <= 100) {
                    heroesObj[name][1] += amount;
                    console.log(`${name} healed for ${amount} HP!`);
                } else {
                    console.log(`${name} healed for ${100 - heroesObj[name][1]} HP!`);
                    heroesObj[name][1] = 100;
                }
                break;

            case 'Recharge':
                let amountMP = Number(value1);
                if (heroesObj[name][3] + amountMP <= 200) {
                    heroesObj[name][3] += amountMP;
                    console.log(`${name} recharged for ${amountMP} MP!`);
                } else {
                    console.log(`${name} recharged for ${200 - heroesObj[name][3]} MP!`);
                    heroesObj[name][3] = 200;
                }
                break;

            case 'TakeDamage':
                let damage = Number(value1);
                let attacker = value2;

                if (heroesObj[name][1] - damage > 0) {
                    heroesObj[name][1] -= damage;
                    console.log(`${name} was hit for ${damage} HP by ${attacker} and now has ${heroesObj[name][1]} HP left!`);
                } else {
                    console.log(`${name} has been killed by ${attacker}!`);
                    delete heroesObj[name];
                }
                break;

            case 'CastSpell':
                let MPNeeded = Number(value1);
                let spellName = value2;

                if (MPNeeded > heroesObj[name][3]) {
                    console.log(`${name} does not have enough MP to cast ${spellName}!`);
                } else {
                    console.log(`${name} has successfully cast ${spellName} and now has ${heroesObj[name][3] -= MPNeeded} MP!`);
                }
                break;
        }
    }
    let go = Object.entries(heroesObj).sort((a, b) => b[1][1] - a[1][1] || a[0].localeCompare(b[0]));

    for (const el of go) {
        console.log(el[0] + '\n' + `  HP: ${el[1][1]}` + '\n' + `  MP: ${el[1][3]}`);
    }
}

solve([
    '2',
    'Solmyr 85 120',
    'Kyrre 99 50',
    'Heal - Solmyr - 10',
    'Recharge - Solmyr - 50',
    'TakeDamage - Kyrre - 66 - Orc',
    'CastSpell - Kyrre - 15 - ViewEarth',
    'End'
])
