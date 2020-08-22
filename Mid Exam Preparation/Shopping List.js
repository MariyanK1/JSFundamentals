/*
It’s the end of the week and it is time for you to go shopping, so you need to create a shopping list first. 

You will receive an initial list with groceries separated by "!".
After that you will be receiving 4 types of commands, until you receive "Go Shopping!"

Urgent {item} - add the item at the start of the list.  If the item already exists, skip this command.

Unnecessary {item} - remove the item with the given name, only if it exists in the list. Otherwise skip this command.

Correct {oldItem} {newItem} – if the item with the given old name exists, change its name with the new one. 
If it doesn't exist, skip this command.

Rearrange {item} - if the grocery exists in the list, remove it from its current position and add it at the end of the list.

Constraints
There won`t be any duplicate items in the initial list
Output
Print the list with all the groceries, joined by ", ".
"{firstGrocery}, {secondGrocery}, …{nthGrocery}"

Input
Tomatoes!Potatoes!Bread
Unnecessary Milk
Urgent Tomatoes
Go Shopping!	

Output
Tomatoes, Potatoes, Bread
*/

function solve(input = []) {
    let initialList = input.shift().split('!');
    let betterInput = input.slice(0, input.indexOf('Go Shopping!'));

    for (const line of betterInput) {
        let [command, item, item2] = line.split(' ');

        switch (command) {
            case 'Urgent':
                if (!initialList.includes(item)) {
                    initialList.unshift(item);
                }
                break;

            case 'Unnecessary':
                if (initialList.includes(item)) {
                    initialList.splice(initialList.indexOf(item), 1);
                }
                break;

            case 'Correct':
                let newItem = item2;
                if (initialList.includes(item)) {
                    initialList.splice(initialList.indexOf(item), 1, newItem);
                }
                break;

            case 'Rearrange':
                if (initialList.includes(item)) {
                    let deletedItem = initialList.splice(initialList.indexOf(item), 1);
                    initialList.push(deletedItem);
                }
                break;
        }
    }

    console.log(initialList.join(', '));
}

solve([
    'Milk!Pepper!Salt!Water!Banana',
    'Urgent Salt',
    'Unnecessary Grapes ',
    'Correct Pepper Onion',
    'Rearrange Grapes',
    'Correct Tomatoes Potatoes',
    'Go Shopping!'
]);
