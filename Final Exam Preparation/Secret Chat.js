/*
You have plenty of free time, so you decide to write a program that conceals and reveals your received messages. Go ahead and type it in! 
On the first line of the input you will receive the concealed message.
After that, until the "Reveal" command is given, you will be receiving strings with instructions
for different operations that need to be performed upon the concealed message in order to interpret it and reveal its true content.
There are several types of instructions, split by ":|:"

InsertSpace:|:{index}
Inserts a single empty space at the given index. The given index will always be valid.

Reverse:|:{substring}
If the message contains the given substring, cut it out, reverse it and add it at the end of the message. 
If not, print "error". 
This operation should replace only the first occurrence of the given substring if there are more than one such occurrences.

ChangeAll:|:{substring}:|:{replacement} 
Changes all occurrences of the given substring with the replacement text.

Input / Constraints
On the first line, you will receive a string with message.
On the next lines, you will be receiving commands, split by ":|:".

Output
After each set of instructions, print the resulting string. 

After the "Reveal" command is received, print this message:
"You have a new text message: {message}"

Sample Case:

In:
Hiware?uiy
ChangeAll:|:i:|:o
Reverse:|:?uoy
Reverse:|:jd
InsertSpace:|:3
InsertSpace:|:7
Reveal

Out:
Howare?uoy
Howareyou?
error
How areyou?
How are you?
You have a new text message: How are you?
*/

function secretChat(input = []) {
    function insertSpace(index) {
        inputString = inputString.slice(0, index) + ' ' + inputString.slice(index);
        return inputString
    }

    function changeAll(substring, replacement) {
        while (inputString.includes(substring)) {
            inputString = inputString.replace(substring, replacement);
        }

        return inputString;
    }

    function reverse(substring) {
        if (inputString.includes(substring)) {
            let del = inputString.substr(inputString.indexOf(substring), substring.length);
            inputString = inputString.replace(del, '');
            let arr = Array.from(del).reverse().join('')

            return inputString += arr
        } else {
            return 'error';
        }
    }
    
    let inputString = String(input.shift());
    let betterInput = input.slice(0, input.indexOf('Reveal'));

    for (const line of betterInput) {
        let [command, value, value2] = line.split(':|:');

        switch (command) {
            case 'InsertSpace':
                console.log(insertSpace(Number(value)));
                break;
            case 'ChangeAll':
                console.log(changeAll(value, value2));
                break;

            case 'Reverse':
                console.log(reverse(value));
                break;
        }
    }

    console.log(`You have a new text message: ${inputString}`);
}

secretChat([
    'Hiware?uiy',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal'
])
