/*
You are at the shooting gallery again and you need a program that helps you keep track of moving targets.
On the first line, you will receive a sequence of targets with their integer values, split by a single space.
Then, you will start receiving commands for manipulating the targets, until the "End" command. 

The commands are the following:
Shoot {index} {power}
Shoot the target at the index, if it exists by reducing its value by the given power (integer value).
A target is considered shot when its value reaches 0.
Remove the target, if it is shot.

Add {index} {value}
Insert a target with the received value at the received index, if it exist.
If not, print: "Invalid placement!"

Strike {index} {radius}
Remove the target at the given index and the ones before and after it depending on the radius,
if such exist. If any of the indices in the range is invalid print:
"Strike missed!" and skip this command.

Example:  Strike 2 2
{radius}	{radius}	{strikeIndex}	{radius}	{radius}		

End
Print the sequence with targets in the following format:
{target1}|{target2}…|{targetn}

Input / Constraints
On the first line you will receive the sequence of targets – integer values [1-10000].
On the next lines, until the "End" will be receiving the command described above – strings.
There will never be a case when "Strike" command would empty the whole sequence.

Output
Print the appropriate message in case of "Strike" command if necessary.
In the end, print the sequence of targets in the format described above.

*/


function movingTarget(input = []) {
    let targets = input.shift().split(' ').map(Number);

    for (const line of input) {
        if (line === 'End') {
            console.log(targets.join('|'))
            return;
        } else {
            let [command, index, value] = line.split(' ');
            index = +index;
            value = +value;

            switch (command) {
                case 'Add':
                    if (index < targets.length && index > -1) {
                        targets.splice(index, 0, value);
                    } else {
                        console.log(`Invalid placement!`);
                    }
                    break;

                case 'Shoot':
                    if (index < targets.length && index > -1) {
                        targets[index] -= value;
                        if (targets[index] <= 0) {
                            targets.splice(index, 1);
                        }
                    }
                break;

                case 'Strike':
                    if (index + value >= targets.length) {
                        console.log(`Strike missed!`)
                    } else {
                        targets.splice(index - value, index + value)
                    }
                break;
            }
        }
    }
}

movingTarget([
    '52 74 23 44 96 110',
    'Shoot 5 10',
    'Shoot 1 80',
    'Strike 2 1',
    'Add 22 3',
    'End'
])
