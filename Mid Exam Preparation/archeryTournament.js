/*
On the first line you will receive integers separated by "|", representing the targets in the archery field.
On the next lines until you receive "Game over" command, you will receive commands by the Judge of the tournament:

"Shoot Left@{start index}@{length}":
Iskren starts traversing the archery field to the left from {start index} with given {length}. 
If he goes out of the field, he will continue from the end of the field.

"Shoot Right@{start index}@{length}":
Iskren starts traversing the archery field to the right from {start index} with given {length}.
If he goes out of the field, he will continue from the start of the field.

"Reverse":
Reverse the archery field.

"Game Over"
Print the archery field and collected points.

When he arrives at the target, he will shoot at it and increase his points by 5 and decrease the target by 5 points,
if the target points are less than 5, he takes all of them and decreases it to 0.
If the start index is out of range of the field Iskren will have to ignore the command.

Input
On the first line, you will receive integers separated by "|" representing the targets in the archery field.
On the next lines, until the "Game over" command you will receive commands in the format described above.

Output
Print the field in following format: "{target} - {target} - {target} ….. - {target}".
"Iskren finished the archery tournament with {points}!"

Sample Case:
In:
10|10|10|10|10
Shoot Left@0@2
Shoot Right@4@5
Shoot Right@6@5
Reverse
Game over

Out:
5 - 5 - 10 - 10 - 10
Iskren finished the archery tournament with 10 points!
*/


function solve(input = []) {
    let targets = input.shift().split("|").map(Number);
    let points = 0;
    let commands;

    while ((commands = input.shift()) !== "Game over") {
        let tokens = commands.split("@");

        if (tokens[0] === "Shoot Left") {
            let index = +tokens[1];
            let length = +tokens[2];
            
            if (index >= 0 && index <= targets.length - 1) {
                let i = index - length;

                while (i < 0) {
                    i = targets.length + i;
                }

                if (targets[i] >= 5) {
                    targets[i] -= 5;
                    points += 5;
                } else {
                    points += targets[i];
                    targets[i] = 0;
                }
            }
        }

        if (tokens[0] === "Shoot Right") {
            let index = +tokens[1];
            let length = +tokens[2];

            if (index >= 0 && index <= targets.length - 1) {
                let i = index + length;

                while (i >= targets.length) {
                    i = i - targets.length;
                }

                if (targets[i] >= 5) {
                    targets[i] -= 5;
                    points += 5;
                } else {
                    points += targets[i];
                    targets[i] = 0;
                }
            }
        }

        if (tokens[0] === "Reverse") {
            targets.reverse();
        }
    }

    console.log(targets.join(" - "));
    console.log(`Iskren finished the archery tournament with ${points} points!`);
}

solve([
    '10|10|10|10|10',
    'Shoot Left@0@2',
    'Shoot Right@4@5',
    'Shoot Right@6@5',
    'Reverse',
    'Game over',
    ''
]);
