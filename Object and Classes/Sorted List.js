/*
Implement a class, which keeps a list of numbers, sorted in ascending order.

It must support the following functionality:
⦁	add(elemenent) - adds a new element to the collection
⦁	remove(index) - removes the element at position index
⦁	get(index) - returns the value of the element at position index
⦁	size - number of elements stored in the collection

The correct order of the elements must be kept at all times, regardless of which operation is called.
Removing and retrieving elements shouldn’t work if the provided index points outside the length of the collection (either throw an error or do nothing).

Note the size of the collection is not a function.

Input / Output
All function that expect input will receive data as parameters. Functions that have validation will be tested with both valid and invalid data.
Any result expected from a function should be returned as it’s result.
Your add and remove functions should return an class instance with the required functionality as it’s result. 
Submit the class definition as is, without wrapping it in any function.

Examples

Input
let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1)); 
list.remove(1);
console.log(list.get(1));

Output
6
7


*/

class List {
    constructor(list = []) {
        this.list = list.sort((a, b) => a - b);
        this.size = this.list.length;
    }

    add(element) {
        this.list.push(element);
        this.list.sort((a, b) => a - b);
        this.size++;
        return;
    }

    remove(index) {
        if (index < 0 || index >= this.list.length) {
            throw new Error(`Index doesn't exist`);
        } else {
            this.list.splice(index, 1);
            this.size--;
            return;
        }
    }

    get(index) {
        if (index < 0 || index >= this.list.length) {
            throw new Error(`Index doesn't exist`);
        } else {
            return this.list[index];
        }
    }
}
let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));
