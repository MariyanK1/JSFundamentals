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
