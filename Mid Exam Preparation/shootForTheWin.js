/*
Write a program that helps you keep track of your shot targets. You will receive a sequence with integers, separated by single space,
representing targets and their value. Afterwards, you will be receiving indices until the "End" command is given and you need to print
the targets and the count of shot targets.

Every time you receive an index, you need to shoot the target on that index, if it is possiblie. 
Everytime you shoot a target, its value becomes -1 and it is considered shot.

Along with that you also need to:
Reduce all the other targets, which have greater values than your current target, with its value. 
All the targets, which have less than or equal value to the shot target, you need to increase with its value.

Keep in mind that you can't shoot a target, which is already shot. You also can't increase or reduce a target, which is considered shot.

When you receive the "End" command, print the targets in their current state and the count of shot targets in the following format:
"Shot targets: {count} -> {target1} {target2}… {targetn}"

Input / Constraints
On the first line of input you will receive a sequence of integers, separated by a single space – the targets sequence.
On the next lines, until the "End" command you be receiving integers each on a single line – the index of the target to be shot.

Output
The format of the output is described above in the problem description.

Sample Case:
In:
24 50 36 70
0
4
3
1
End

Out:
Shot targets: 3 -> -1 -1 130 -1
*/



function forTheWin(input = []) {
    let targets = input.shift().split(' ').map(Number);
    let successfulShots = 0;

    for (const el of input) {
        if (el === 'End') {
            console.log(`Shot targets: ${successfulShots} -> ${targets.join(' ')}`)
            return;
        } else {
            let index = +el;
            
            if (index !== -1 && index < targets.length)
                for (let i = 0; i < targets.length; i++) {
                    let el = targets[i];
                    if (i === index && el !== -1) {
                        targets[index] = -1;
                        successfulShots++;

                        for (let j = 0; j < targets.length; j++) {
                           let target = targets[j];

                           if (target !== -1) {
                               if (target > el) {
                                   targets[j] -= el;
                               } else if (target <= el) {
                                   targets[j] += el;
                               }
                           }
                        }
                    }
                }
        }
    }
}

forTheWin(['24 50 36 70', '0', '4', '3', '1', 'End'])
forTheWin(['30 30 12 60 54 66', '5', '2', '4', '0', 'End'])
