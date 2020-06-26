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
