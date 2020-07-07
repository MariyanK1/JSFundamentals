/*
Your friend has hired you to help him with his website creation. Your current task is to create an Email Validator.

Create a program that manipulates a string and makes it suitable for an Email.
First, you are going to receive the email that the user wants to use, then you will receive commands.

You will be receiving commands until the "Complete" command.

There are six possible commands:

"Make Upper"
Replace all letters with upper case, then print the result. 

"Make Lower"
Replace all letters with lower case, then print the result.

"GetDomain {count}
Print the last {count} characters of the Email.

"GetUsername"
Print the substring from the start of the Email until the @ symbol.
If the Email doesn’t contain the @ symbol, print: 
"The email {email} doesn't contain the @ symbol."

"Replace {char}"
Replace all occurences of the {char} with a dash "-" and print the result.

"Encrypt"
Get the ASCII value of each symbol. Print the result on a single line separated by a single space

Input
On the 1st line you are going to receive the Email in the form of a string.
On the next lines, until the "Complete" command is received, you will be receiving commands.

Output
Print the output of every command in the format described above. 

Sample Case:

In:
Mike123@somemail.com
Make Upper
GetDomain 3
GetUsername
Encrypt
Complete

Out:
MIKE123@SOMEMAIL.COM
COM
MIKE123
77 73 75 69 49 50 51 64 83 79 77 69 77 65 73 76 46 67 79 77
*/

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
