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
