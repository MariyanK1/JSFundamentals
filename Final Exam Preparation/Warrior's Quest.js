/*
Warrior! Thank you for coming. The city is overrun by demons.
We need your help securing the civilians and defending our land. For the Alliance!

First, you will receive a skill that needs the deciphered.
Next, you will be receiving commands split by a single space
until you get the "For Azeroth" command.

There are 5 possible commands:
"GladiatorStance"
Replace all letters with upper case and print the result.

"DefensiveStance"
Replace all letters with lower case and print the result.

"Dispel {index} {letter}"
Replace the letter at the index with the given one and print "Success!"
If the index is invalid, print: "Dispel too weak."

"Target Change {substring} {second substring}"
Replace the first substring with the second and print the result.

"Target Remove {substring}"
Remove the substring from the string and print the result.

If the input command is not in the list, print "Command doesn't exist!"

Input / Constraints
On the 1st line you are going to receive the string.
On the next lines, until you receive "For Azeroth", you will be receiving commands.
All commands are case sensitive.

Output
Print the output of the commands in the format described above.

Sample Case:

In:
fr1c710n
GladiatorStance
Dispel 2 I
Dispel 4 T
Dispel 6 O
Dispel 5 I
Dispel 10 I
Target Change RICTION riction
For Azeroth

Out:
FR1C710N
Success!
Success!
Success!
Success!
Dispel too weak.
Friction
*/



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
