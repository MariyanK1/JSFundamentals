function bossRush(input = []) {
    input.shift();

    let pattern = /^\|(?<boss>[A-Z]{4,})\|:#(?<title>[a-zA-Z]+ [a-zA-Z]+)#$/g;

    for (let i = 0; i < input.length; i++) {

        if ((valid = pattern.exec(input[i])) !== null) {
            let boss = valid.groups['boss'];
            let title = valid.groups['title'];
            let bossStrength = boss.length;
            let titleNum = title.length;
            console.log(`${boss}, The ${title}`);
            console.log(`>> Strength: ${bossStrength}`);
            console.log(`>> Armour: ${titleNum}`);
        } else {
            console.log(`Access denied!`);
        }
    }

}
bossRush([
    '3',
    '|GEORGI|:#Lead architect#',
    '|Hristo|:#High Overseer#',
    '|STEFAN|:#Assistant Game Developer#'
])
