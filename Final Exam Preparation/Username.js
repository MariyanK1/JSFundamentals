function username(input = []) {
    let inputCut = input.slice(0, input.indexOf('Sign up'));
    let inputString = inputCut.shift();

    for (const line of inputCut) {
        let [command, value, value2] = line.split(' ');

        switch (command) {
            case 'Case':
                if (value === 'lower') {
                    inputString = inputString.toLowerCase();
                    console.log(inputString);
                } else {
                    inputString = inputString.toUpperCase();
                    console.log(inputString);
                }
                break;

            case 'Cut':
                let substring = value;
                if (inputString.includes(substring)) {
                    inputString = inputString.replace(substring, '');
                    console.log(inputString);
                } else {
                    console.log(`The word ${inputString} doesn't contain ${substring}.`);
                }
                break;
            case 'Reverse':
                let startIndex = Number(value);
                let endIndex = Number(value2);

                if (startIndex < inputString.length &&
                    startIndex >= 0 &&
                    endIndex < inputString.length &&
                    endIndex >= 0) {
                    let reversed = Array.from(inputString.substring(startIndex, endIndex + 1)).reverse().join('');
                    console.log(reversed);
                }
                break;
            case 'Check':
                let char = value;
                if (inputString.includes(char)) {
                    console.log("Valid");
                } else {
                    console.log(`Your username must contain ${char}.`);
                }
                break;
            case 'Replace':
                let char1 = value;
                while (inputString.includes(char1)) {
                    inputString = inputString.replace(char1, '*')
                }
                console.log(inputString);

                break;
        }
    }
}
username(['ThisIsMyString', 'Reverse 1 4', 'Replace i', 'Cut My', 'Sign up'])
