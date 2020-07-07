/*
Ah, look who arrived, the latecomer. Let me repeat our plan for our friend here.
There is a hoard of demons in this room. We must first identify them before we can proceed.

Create a program that checks if inputs are valid and decrypt it.
On the first line you will receive a number that indicates how many inputs you will receive on the next lines.

You will read lines with a boss name and title 
and you should check if they are valid, considering the following rules:

Boss - the name should be in upper case letters, should be minimum four letters long and should be surrounded by "|"

Title - contains exactly 2 words and they contain only alphabetical letters and 1 whitespace between them. The title should be surrounded by "#"
The name and title should be split by a single ":"

Example for a valid input:  |GEORGI|:#Lead architect#

If the input is valid. Print in the following format:
"{boss name}, The {title}
>> Strength: {length of the name}
>> Armour: {length of the title}"

If the input is invalid, print "Access denied!"

Input / Constraints
On the 1st line, you will receive a number of inputs.
On the next n lines, you will have to check if a boss has a valid name and title.

Output
Print the output with the format described above.

Sample Case:

In:
3
|GEORGI|:#Lead architect#
|Hristo|:#High Overseer#
|STEFAN|:#Assistant Game Developer#

Out:
GEORGI, The Lead architect
>> Strength: 6
>> Armour: 14
Access denied!
Access denied!
*/

function bossRush(input = []) {
    input.shift();

    let pattern = /^\|(?<boss>[A-Z]{4,})\|:#(?<title>[a-zA-Z]+ [a-zA-Z]+)#$/g;

    for (let i = 0; i < input.length; i++) {

        if ((valid = pattern.exec(input[i])) !== null) {
            let boss = valid.groups['boss'];
            let title = valid.groups['title'];
            let bossStrength = boss.length;
            let titleNum = title.length;
            console.log(`${boss}, The ${title}`);
            console.log(`>> Strength: ${bossStrength}`);
            console.log(`>> Armour: ${titleNum}`);
        } else {
            console.log(`Access denied!`);
        }
    }

}
bossRush([
    '3',
    '|GEORGI|:#Lead architect#',
    '|Hristo|:#High Overseer#',
    '|STEFAN|:#Assistant Game Developer#'
])
