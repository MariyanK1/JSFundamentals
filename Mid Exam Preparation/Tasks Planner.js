/*
Create a program that helps you organize your daily tasks.

First, you are going to receive the hours each task takes оn a single line, separated by space, in the following format:
"{task1} {task2} {task3}… {taskn}"

Each task takes from 1 to 5 hours. If its time is set to 0 – it is completed. If its time is set to a negative number – the task is dropped.

Then you will start receiving commands until you read the "End" message.

There are six possible commands:
⦁	"Complete {index}"
Find the task on this index in your collection and complete it, if the index exists.

⦁	"Change {index} {time}"
Replace the time needed of the task on the given index with the time given, if the index exists. 

⦁	"Drop {index}"
Drop the task on the given index, setting its hour to -1, if the index exists.

⦁	"Count Completed"
Print the number of completed tasks.

⦁	"Count Incomplete"
Print the number of incomplete tasks (this doesn’t include the dropped tasks).

⦁	"Count Dropped"
Print the number of dropped tasks (this doesn’t include the incomplete tasks).

In the end, print the incomplete tasks on a single line,
separated by a single space in the following format:
"{task1} {task2} {task3}… {taskn}"

Input
⦁	On the 1st line you are going to receive the time of each task, separated by a single space.
⦁	On the next lines, until the "End" command is received, you will be receiving commands.

Output
⦁	Print the tasks in the format described above.


Sample case:

In:
1 -1 2 3 4 5
Complete 4
Change 0 4
Drop 3
Count Dropped
End

Out:
2
4 2 5
*/

function solve(input = []) {

    let tasks = input.shift().split(' ').map(Number);

    let commands;

    while ((commands = input.shift()) !== 'End') {
        let tokens = commands.split(' ');
        let action = tokens.shift();

        if (action === 'Complete') {
            let i = +tokens[0];
            if (i >= 0 && i < tasks.length) {
                tasks[i] = 0;
            }
        } else if (action === 'Change') {
            let i = +tokens[0];
            let value = +tokens[1];

            if (i >= 0 && i < tasks.length) {
                tasks.splice(i, 1, value);
            }
        } else if (action === 'Drop') {
            let i = +tokens[0];

            if (i >= 0 && i < tasks.length) {
                tasks.splice(i, 1, -1);
            }
        } else if (action === 'Count') {
            if (tokens[0] === 'Completed') {
                let count = 0;
                for (let i = 0; i < tasks.length; i++) {
                    let element = tasks[i];
                    if (element === 0) {
                        count++;
                    }
                }
                console.log(count);
            } else if (tokens[0] === 'Incomplete') {
                let count = 0;

                for (let i = 0; i < tasks.length; i++) {
                    let element = tasks[i];
                    if (element > 0) {
                        count++;
                    }
                }
                console.log(count);
            } else if (tokens[0] === 'Dropped') {
                let count = 0;

                for (let i = 0; i < tasks.length; i++) {
                    let element = tasks[i];

                    if (element < 0) {
                        count++;
                    }
                }
                console.log(count);
            }
        }
    }

    let incompleted = [];

    for (let i = 0; i < tasks.length; i++) {
        let element = tasks[i];

        if (element > 0) {
            incompleted.push(element)
        }
    }
    console.log(incompleted.join(' '));
}
