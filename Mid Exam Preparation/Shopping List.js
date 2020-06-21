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

function solve(input) {
    let shoppingList = input.shift().split('!');
    let commands = input.shift();

    while (commands !== 'Go Shopping!') {
        let tokens = commands.split(' ');
        let command = tokens[0];
        let item = tokens[1];
        let index = shoppingList.indexOf(item);
        switch (command) {
            case 'Urgent':
                if (index < 0) {
                    shoppingList.unshift(item);
                }
                break;
            case 'Unnecessary':
                if (index >= 0) {
                    shoppingList.splice(index, 1);
                }
                break;
            case 'Correct':
                let newItem = tokens[2];
                if (index >= 0) {
                    shoppingList.splice(index, 1, newItem);
                }
                break;
            case 'Rearrange':
                if (index >= 0) {
                    shoppingList.splice(index, 1);
                    shoppingList.push(item);
                }
                break;
            default:
                break;
        }
        commands = input.shift();
    }
    console.log(shoppingList.join(', '));
}

