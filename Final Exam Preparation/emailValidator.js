function emailValidator(input = []) {
    let email = input.shift();
    let betterInput = input.slice(0, input.indexOf('Complete'));

    for (const line of betterInput) {
        let [command, value] = line.split(' ');

        switch (command) {
            case 'Make':
                if (value === 'Upper') {
                    email = email.toUpperCase();
                    console.log(email);
                } else {
                    email = email.toLowerCase();
                    console.log(email);
                }
                break;

            case 'GetDomain':
                let count = Number(value);
                let temp = email.substring(email.length - count)
                console.log(temp);
                break;

            case 'GetUsername':
                if (email.includes('@')) {
                    let go = email.slice(0, email.indexOf('@'));
                    console.log(go);
                } else {
                    console.log(`The email ${email} doesn't contain the @ symbol.`);
                }
                break;

            case 'Replace':
                while (email.includes(value)) {
                    email = email.replace(value, '-');
                }
                console.log(email);
                break;

            case 'Encrypt':
                let arr = email.split('')
                let ascii = [];
                for (let i = 0; i < arr.length; i++) {
                    let asc = email.charCodeAt(i);
                    ascii.push(asc)
                }
                console.log(ascii.join(' '));
                break;
        }
    }
}

emailValidator([
    'Mike123@somemail.com',
    'Make Upper',
    'GetDomain 3',
    'GetUsername',
    'Encrypt',
    'Complete'
])
