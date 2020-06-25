/*
Create a program that tracks the battle and either chooses a winner or prints a stalemate.
On the first line you will receive the status of the pirate ship, which is a string representing integer sections separated by '>'.

On the second line you will receive the same type of status, but for the warship: 
"{section1}>{section2}>{section3}… {sectionn}"

On the third line you will receive the maximum health capacity a section of the ship can reach. 

The following lines represent commands until "Retire":

⦁	Fire {index} {damage} – the pirate ship attacks the warship with the given damage at that section.
Check if the index is valid and if not skip the command. If the section breaks (health <= 0) the warship sinks,
print the following and stop the program:
"You won! The enemy ship has sunken."

⦁	Defend {startIndex} {endIndex} {damage} - the warship attacks the pirate ship with the given damage at that range (indexes are inclusive).
Check if both indexes are valid and if not skip the command. If the section breaks (health <= 0)
the pirate ship sinks, print the following and stop the program:
"You lost! The pirate ship has sunken."

⦁	Repair {index} {health} - the crew repairs a section of the pirate ship with the given health.
Check if the index is valid and if not skip the command.
The health of the section cannot exceed the maximum health capacity.

⦁	Status – prints the count of all sections of the pirate ship that need repair soon,
which are all sections that are lower than 20% of the maximum health capacity.
Print the following:
"{count} sections need repair."

In the end if a stalemate occurs print the status of both ships, 
which is the sum of their individual sections in the following format:
"Pirate ship status: {pirateShipSum}"
"Warship status: {warshipSum}"

Input
⦁	On the 1st line you are going to receive the status of the pirate ship (integers separated by '>')
⦁	On the 2nd line you are going to receive the status of the warship
⦁	On the 3rd line you are going receive the maximum health a section of a ship can reach.
⦁	On the next lines, until "Retire", you will be receiving commands.

Output
⦁	Print the output in the format described above.

Constraints
⦁	The section numbers will be integers in the range [1….1000]
⦁	The indexes will be integers [-200….200]
⦁	The damage will be an integer in the range [1….1000]
⦁	The health will be an integer in the range [1….1000]

Sample case:

In:
12>13>11>20>66
12>22>33>44>55>32>18
70
Fire 2 11
Fire 8 100
Defend 3 6 11
Defend 0 3 5
Repair 1 33
Status
Retire

Out:
2 sections need repair.
Pirate ship status: 135
Warship status: 205

*/

function solve(input = []) {
    let pirateShip = input.shift().split('>').map(Number);
    let warShip = input.shift().split('>').map(Number);
    let maxHealth = Number(input.shift());

    let commands;

    while ((commands = input.shift()) !== 'Retire') {
        let tokens = commands.split(' ');
        let action = tokens.shift();

        if (action === 'Fire') {
            let i = +tokens[0];
            let dmg = +tokens[1];

            if (i < warShip.length && i >= 0) {
                if (warShip[i] - dmg <= 0) {
                    console.log("You won! The enemy ship has sunken.");
                    return;
                } else {
                    warShip[i] -= dmg;
                }
            }
        }

        else if (action === 'Defend') {
            let startIndex = +tokens[0];
            let endIndex = +tokens[1];
            let dmg = +tokens[2];

            if (
                startIndex < pirateShip.length &&
                startIndex >= 0 &&
                endIndex < pirateShip.length &&
                endIndex >= 0
            ) {
                for (let i = startIndex; i <= endIndex; i++) {
                    pirateShip[i] -= dmg

                    if (pirateShip[i] <= 0) {
                        console.log("You lost! The pirate ship has sunken.");
                        return;
                    }
                }
            }
        }

        else if (action === 'Repair') {
            let i = +tokens[0];
            let health = +tokens[1];

            if (i < pirateShip.length && i >= 0) {

                if (pirateShip[i] + health > maxHealth) {
                    pirateShip[i] = maxHealth;
                } else {
                    pirateShip[i] += health;
                }
            }
        }

        else if (action === 'Status') {
            let count = 0;
            for (let i = 0; i < pirateShip.length; i++) {

                if (pirateShip[i] < maxHealth * 0.20) {
                    count++;
                }
            }

            console.log(`${count} sections need repair.`);
        }
    }
    let pirateShipStatus = 0;
    for (let i = 0; i < pirateShip.length; i++) {
        const element = pirateShip[i];
        pirateShipStatus += element;
    }

    let warShipStatus = 0;
    for (let index = 0; index < warShip.length; index++) {
        const element = warShip[index];
        warShipStatus += element
    }

    console.log(`Pirate ship status: ${pirateShipStatus}`);
    console.log(`Warship status: ${warShipStatus}`);
}
