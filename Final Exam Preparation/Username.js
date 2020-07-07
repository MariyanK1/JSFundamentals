/*
First, you are going to receive the username that he wants to use in the first place, then commands.
You will be receiving commands until the "Sign up" command.

There are six possible commands:

"Case {lower/upper}"
Replace all letters with lower case or with upper case, then print the result.

"Reverse {startIndex} {endIndex}"
Reverse the substring from the startIndex until the endIndex, then print it. Do NOT change it in the username.
Note: Check if the indexes are valid. If they aren’t - skip the command. The indexes are inclusive.

"Cut {substring}"
Check if the string contains  the substring and if yes, cut it out and print the result.
If the string doesn’t contain the given substring, print: 
"The word {string} doesn't contain {substring}."

"Replace {char}"
Replace all occurences of char with astericks (*) and print the result.

"Check {char}"
In order for a username to be valid, it must contain the given char. 
If the password is valid, print "Valid".
If it is not valid, print: "Your username must contain {char}."

Input
On the 1st line you are going to receive the string.
On the next lines, until the "Sign up" command is received, you will be receiving commands.
All commands are case sensitive.

Output
Print the output of every command in the format described above.

Sample Case:

In:
ThisIsMyString
Reverse 1 4
Replace i
Cut My
Sign upThisIsMyString
Reverse 1 4
Replace i
Cut My
Sign up

Out:
Isih
Th*sIsMyStr*ng
Th*sIsStr*ng
*/


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
