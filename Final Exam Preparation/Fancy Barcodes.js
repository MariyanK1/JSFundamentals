function regEx(input = []) {
    let num = Number(input.shift());
    let pattern = /^@#+(?=[A-Z])([A-Za-z0-9]{6,})(?<=[A-Z])@#+$/m;

    let string = ''
    for (let i = 1; i <= num; i++) {
        let data = input.shift();
        let match = pattern.exec(data);

        if (match !== null) {
            let matches = match[1];

            for (let i = 0; i < matches.length; i++) {
                if (matches.charCodeAt(i) >= 48 && matches.charCodeAt(i) <= 57) {
                    string += matches[i];
                }
            }

            if (!matches.match('[0-9]+')) {
                console.log(`Product group: 00`);
            }
            if (matches.match('[0-9]+')) {
                console.log(`Product group: ${string}`);
                string = ''
            }
        } else {
            console.log(`Invalid barcode`);
        }
    }
}

regEx(['3', '@#FreshFisH@#', '@###Brea0D@###', '@##Che46sE@##'])
