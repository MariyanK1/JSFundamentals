/*
Create a program that manages battles. You need to keep information about people, the health and energy they have.
You will be receiving lines with commands until you receive the "Results" command.

There are three possible commands: 
"Add:{personName}:{health}:{energy}":
Add the person, his/her health and energy to your records.
If person with the given name already exists, just increase the health of the person with the current one that is given.

"Attack:{attackerName}:{defenderName}:{damage}":
Check if both people exist and if they do, reduce the defender’s health with the damage given.
If the defender’s health reaches 0 or less, the person is disqualified, 
and you need to remove him/her from your records and print the following message:
"{defenderName} was disqualified!"
You also have to reduce the attacker’s energy by 1. If it reaches 0, he/she is disqualified, 
and you need to remove him/her from your records and print the following message:
"{attackerName} was disqualified!"

"Delete:{username}":
Delete all records of the given user, if he exists. If "All" is given as username - delete all records you have. 
In the end, you have to print the count of people left, each person with his/her health and energy 
sorted in descending order by the health and then by their name in ascending order in the following format:  

People count: {count}
{personName} - {health} - {energy}
{personName} - {health} - {energy}

Input
You will be receiving lines until you receive the "Results" command.
The health is an integer number in the range [1...100000].
The energy is an integer number in the range [1...100].
The input will always be valid.

Output
Print the appropriate message after the "Attack" command, if someone is disqualified.
Print the people with their health and energy in the format described above.

Examples=>

Input:
Add:Mark:1000:5
Add:Clark:1000:3
Attack:Clark:Mark:500
Add:Allison:2500:5
Attack:Clark:Mark:300
Add:Charlie:4000:10
Attack:Clark:Mark:500
Results	

Output:
Mark was disqualified!
Clark was disqualified!
People count: 2
Charlie - 4000 - 10
Allison - 2500 - 5
*/

function x(input = []) {
    input = input.slice(0, input.indexOf('Results'));
    let warriors = {};

    for (const line of input) {
        let [command, name, value1, value2] = line.split(':');

        switch (command) {
            case 'Add':
                const health = +value1;
                const energy = +value2;
                if (!warriors.hasOwnProperty(name)) {
                    warriors[name] = { health, energy };
                } else {
                    warriors[name].health += health;
                    warriors[name].energy += energy;
                }
                break;

            case 'Attack':
                const attacker = name;
                const deffender = value1;
                const damage = +value2;

                if (warriors.hasOwnProperty(attacker)
                    && warriors.hasOwnProperty(deffender)) {
                    warriors[deffender].health -= damage;
                    if (warriors[deffender].health <= 0) {
                        delete warriors[deffender];
                        console.log(`${deffender} was disqualified!`);
                    }

                    warriors[attacker].energy -= 1;
                    if (warriors[attacker].energy <= 0) {
                        console.log(`${attacker} was disqualified!`);
                        delete warriors[attacker]
                    }
                }
                break;

            default:
                if (name === 'All') {
                    for (const key in warriors) {
                        delete warriors[key]
                    }
                } else {
                    delete warriors[name]
                }
                break;
        }
    }

    let arr = Object.entries(warriors)
        .sort((a, b) => b[1].health - a[1].health || a[0].localeCompare(b[0]));

    console.log(`People count: ${arr.length}`);
    arr.forEach(warrior => {
        console.log(`${warrior[0]} - ${warrior[1].health} - ${warrior[1].energy}`);
    })
}

x([
    'Add:Bonnie:3000:5',
    'Add:Johny:4000:10',
    'Delete:All',
    'Add:Bonnie:3333:3',
    'Results'
])
