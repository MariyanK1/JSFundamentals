function solve(input = []) {

    let inputString = input.shift();
    input.pop();

    function dispel(index, letter) {

        if (index > inputString.length && index >= 0) {
            console.log('Dispel too weak.');
        } else {
            inputString = inputString.replace(inputString[index], letter);
            console.log('Success!');
        }
    }

    function targetChange(substring, secondSubstring) {
        if (inputString.includes(substring)) {
            inputString = inputString.replace(substring, secondSubstring);
        }

        return inputString
    }

    function targetRemove(substring) {

        while (inputString.includes(substring)) {
            inputString = inputString.replace(substring, '')
        }
        return inputString;
    }

    for (const line of input) {
        let tokens = line.split(' ');
        let command = tokens.shift();

        switch (command) {
            case 'GladiatorStance':
                inputString = inputString.toUpperCase()
                console.log(inputString);
                break;
            case 'DefensiveStance':
                inputString = inputString.toLowerCase()
                console.log(inputString);
                break;

            case 'Dispel':
                dispel(Number(tokens[0]), tokens[1]);
                break;

            case 'Target':
                if (tokens[0] === 'Change') {
                    console.log(targetChange(tokens[1], tokens[2]));
                }
                else if (tokens[0] === 'Remove') {
                    console.log(targetRemove(tokens[1]));
                }
                else {
                    console.log("Command doesn't exist!");
                }
                break;

            default:
                console.log("Command doesn't exist!");
                break;
        }
    }
}

solve([
    'fr1c710n',
    'GladiatorStance',
    'Dispel 2 I',
    'Dispel 4 T',
    'Dispel 6 O',
    'Dispel 5 I',
    'Dispel 10 I',
    'Target Change RICTION riction',
    'For Azeroth'
])
