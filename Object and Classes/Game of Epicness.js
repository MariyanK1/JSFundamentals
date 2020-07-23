/*
Write a JavaScript program that determines the winner from all battles. You will receive two arguments:
The first argument is an array of kingdoms with generals and their army in the form of an object with format:
{ kingdom: String, general: String, army: Number }

Every general has his own army that fights for a certain kingdom. Note that, every kingdom’s name is unique,
and every general’s name is unique in this kingdom. If the general already exists in this kingdom add the army to his current one.

After you go through all the kingdoms with their generals with armies and store the information about them, it’s time to start the battles.

The second argument is matrix of strings showing which kingdom’s generals are fighting in this format:
[
	[ "{AttackingKingdom} ", "{AttackingGeneral}", "{DefendingKingdom} ", "{DefendingGeneral}" ],
	…
]

The first two elements are the names of the attacking general from certain kingdom and the second two
are the names of the defending general from certain kingdom.
Compare the two general’s armies to determine who wins and who losses based on who have the larger army wins. 

The winner’s army increases with 10% and the loser’s army decreases with 10%.
Keep in mind to round them down if there is any excess army after the battle If there is a draw, do not do anything.
Keep track of the wins and losses for every general’s battle. 
Note that, generals from the same kingdom cannot attack each other. 
After you finish with all battles you need to find which kingdom wins the game.
To decide that, first order them by all their general’s wins (descending) then by their losses (ascending), 
and finally by the kingdom’s name in ascending alphabetical order.

Input
You will receive two arguments – an array of objects with properties and a matrix of strings as shown above.

Output
Print on the console the winning kingdom and sort the generals by their armies in descending order, formatted as seen in the examples.

Constraints
⦁	The number of elements in the first input argument will be in range [1..100] inclusive 
⦁	The number of elements in the second input argument will be in range [0..100] inclusive 
⦁	General’s army will be always an integer in range [0..1,000,000] inclusive
⦁	There will be no invalid input
⦁	There will be no matching number of armies in the output

Examples:
In:
[ { kingdom: "Maiden Way", general: "Merek", army: 5000 },
  { kingdom: "Stonegate", general: "Ulric", army: 4900 },
  { kingdom: "Stonegate", general: "Doran", army: 70000 },
  { kingdom: "YorkenShire", general: "Quinn", army: 0 },
  { kingdom: "YorkenShire", general: "Quinn", army: 2000 },
  { kingdom: "Maiden Way", general: "Berinon", army: 100000 } ],
[ ["YorkenShire", "Quinn", "Stonegate", "Ulric"],
  ["Stonegate", "Ulric", "Stonegate", "Doran"],
  ["Stonegate", "Doran", "Maiden Way", "Merek"],
  ["Stonegate", "Ulric", "Maiden Way", "Merek"],
  ["Maiden Way", "Berinon", "Stonegate", "Ulric"] ]

Out:
Winner: Stonegate
/\general: Doran
---army: 77000
---wins: 1
---losses: 0
/\general: Ulric
---army: 5336
---wins: 2
---losses: 1

*/


function solve(arrayOfKingdoms, fightingKingdoms) {
    let kingdoms = {};

    for (let element of arrayOfKingdoms) {
        let kingdomName = element.kingdom;
        let generalName = element.general;
        let army = +element.army;

        if (!kingdoms.hasOwnProperty(kingdomName)) {
            kingdoms[kingdomName] = {
                [generalName]: { army, wins: 0, losses: 0 }
            };
        } else {
            if (kingdoms[kingdomName].hasOwnProperty([generalName])) {
                kingdoms[kingdomName][generalName].army += army;
            } else {
                kingdoms[kingdomName][generalName] = {
                    army,
                    wins: 0,
                    losses: 0
                };
            }
        }
    }

    for (let element of fightingKingdoms) {
        let attackKingdom = element[0];
        let attackGeneral = element[1];
        let defendKingdom = element[2];
        let defendGeneral = element[3];
        let armyAttack = 0;
        let armyDeffend = 0;

        if (
            kingdoms.hasOwnProperty(attackKingdom) &&
            kingdoms.hasOwnProperty(defendKingdom)
        ) {
            if (kingdoms[attackKingdom] === kingdoms[defendKingdom]) {
                continue;
            }
            if (
                kingdoms[attackKingdom].hasOwnProperty(attackGeneral) &&
                kingdoms[defendKingdom].hasOwnProperty(defendGeneral)
            ) {
                armyAttack = kingdoms[attackKingdom][attackGeneral].army;
                armyDeffend = kingdoms[defendKingdom][defendGeneral].army;
            }
        }

        if (armyAttack > armyDeffend) {
            kingdoms[attackKingdom][attackGeneral].army = Math.floor(
                armyAttack + armyAttack * 0.1
            );
            kingdoms[attackKingdom][attackGeneral].wins += 1;
            kingdoms[defendKingdom][defendGeneral].army = Math.floor(
                armyDeffend - armyDeffend * 0.1
            );
            kingdoms[defendKingdom][defendGeneral].losses += 1;
        } else if (armyAttack < armyDeffend) {
            kingdoms[defendKingdom][defendGeneral].army = Math.floor(
                armyDeffend + armyDeffend * 0.1
            );
            kingdoms[defendKingdom][defendGeneral].wins += 1;
            kingdoms[attackKingdom][attackGeneral].army = Math.floor(
                armyAttack - armyAttack * 0.1
            );
            kingdoms[attackKingdom][attackGeneral].losses += 1;
        }
    }
    // order and print
    let orderedKingdoms = Object.keys(kingdoms).sort(
        (a, b) =>
            getTotal(kingdoms[b], 'wins') - getTotal(kingdoms[a], 'wins') ||
            getTotal(kingdoms[a], 'losses') - getTotal(kingdoms[b], 'losses') ||
            a.localeCompare(b)
    );
    let winner = orderedKingdoms[0];
    console.log(`Winner: ${winner}`);
    let generals = Object.keys(kingdoms[winner]).sort(
        (a, b) => kingdoms[winner][b].army - kingdoms[winner][a].army
    );
    generals.forEach(general => {
        let info = kingdoms[winner][general];
        console.log(`/\\general: ${general}`);
        console.log(`---army: ${info.army}`);
        console.log(`---wins: ${info.wins}`);
        console.log(`---losses: ${info.losses}`);
    });

    function getTotal(kingdom, type) {
        return Object.keys(kingdom).reduce((acc, cur) => (acc + kingdom[cur][type]), 0);
    }
}


solve([{ kingdom: "Maiden Way", general: "Merek", army: 5000 },
{ kingdom: "Stonegate", general: "Ulric", army: 4900 },
{ kingdom: "Stonegate", general: "Doran", army: 70000 },
{ kingdom: "YorkenShire", general: "Quinn", army: 0 },
{ kingdom: "YorkenShire", general: "Quinn", army: 2000 },
{ kingdom: "Maiden Way", general: "Berinon", army: 100000 }],
    [["YorkenShire", "Quinn", "Stonegate", "Ulric"],
    ["Stonegate", "Ulric", "Stonegate", "Doran"],
    ["Stonegate", "Doran", "Maiden Way", "Merek"],
    ["Stonegate", "Ulric", "Maiden Way", "Merek"],
    ["Maiden Way", "Berinon", "Stonegate", "Ulric"]])
