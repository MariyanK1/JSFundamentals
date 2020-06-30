function activationKeys(input = []) {
    let inputString = String(input.shift());
    let validInput = input.slice(0, input.indexOf('Generate'));

    for (const line of validInput) {
        let [command, value, value2, value3] = line.split('>>>');

        switch (command) {
            case 'Contains':
                let substring = value;
                if (inputString.includes(substring)) {
                    console.log(`${inputString} contains ${substring}`);
                } else {
                    console.log(`Substring not found!`);
                }
                break;

            case 'Flip':
                let startIndex = Number(value2);
                let endIndex = Number(value3);

                if (value === 'Upper') {
                    let substring = inputString.slice(startIndex, endIndex);
                    inputString = inputString.replace(substring, substring.toUpperCase());
                    console.log(inputString);

                } else {
                    let substr = inputString.slice(startIndex, endIndex);
                    inputString = inputString.replace(substr, substr.toLowerCase());
                    console.log(inputString);
                }
                break;

            case 'Slice':
                let startI = Number(value);
                let endI = Number(value2);
                let cut = inputString.substring(startI, endI);
                inputString = inputString.replace(cut, '')
                console.log(inputString);
                break;
            default:
                break;
        }
    }

    console.log(`Your activation key is: ${inputString}`);
}

activationKeys([
    '134softsf5ftuni2020rockz42',
    'Slice>>>3>>>7',
    'Contains>>>-rock',
    'Contains>>>-uni-',
    'Contains>>>-rocks',
    'Flip>>>Upper>>>2>>>8',
    'Flip>>>Lower>>>5>>>11',
    'Generate'
]);
