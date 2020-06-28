/*
Write a password reset program that performs a series of commands upon a predefined string.
First, you will receive a string and afterwards, until the command "Done" is given, you will be receiving strings with commands split by a single space.

The commands will be the following:

TakeOdd
Takes only the characters at odd indices and concatenates them together to
obtain the new raw password and then prints it.

Cut {index} {length}
Gets the substring with the given length starting from the given index from the password and removes its first occurrence of it, 
then prints the password on the console.
The given index and length will always be valid.

Substitute {substring} {substitute}
If the raw password contains the given substring, replaces all of its 
occurrences with the substitute text given and prints the result.
If it doesn’t, prints "Nothing to replace!"

Input
You will be receiving strings until the "Done" command is given.

Output
After the "Done" command is received, print:
"Your password is: {password}"

Constraints
The indexes from the "Cut {index} {length}" command will always be valid.

Sample case:

In:
Siiceercaroetavm!:?:ahsott.:i:nstupmomceqr 
TakeOdd
Cut 15 3
Substitute :: -
Substitute | ^
Done

Out:
icecream::hot::summer
icecream::hot::mer
icecream-hot-mer
Nothing to replace!
Your password is: icecream-hot-mer
*/

function pwReset(input = []) {
    let inputPassword = input.shift();
    let lines = input.slice(0, input.indexOf('Done'));
    for (const line of lines) {
        let [command, value, value2] = line.split(' ');

        switch (command) {
            case 'TakeOdd':
                let tempStr = '';
                for (let i = 0; i < inputPassword.length; i++) {
                    if (i % 2 !== 0) {
                        tempStr += inputPassword[i]
                    }
                }
                inputPassword = tempStr;
                console.log(inputPassword);
                break;

            case 'Cut':
                let index = Number(value);
                let length = Number(value2);
                let arr = Array.from(inputPassword).splice(index, length).join('');
                inputPassword = inputPassword.replace(arr, '');
                console.log(inputPassword);
                break;
            case 'Substitute':
                let substring = value;
                let substitute = value2;
                if (!inputPassword.includes(substring)) {
                    console.log('Nothing to replace!');
                } else {
                while (inputPassword.includes(substring)) {
                    inputPassword = inputPassword.replace(substring, substitute);
                }
                console.log(inputPassword);
            };
        }
    }

    console.log(`Your password is: ${inputPassword}`);
}
