/*
As a young developer Iskren is a part from software development school team. 
His task is to do online book library, but he needs your help for that.

On the first line you will receive a String, representing shelf with books in library. Every book is separated with "&".

On the next lines until you receive "Done" command, you will receive following commands:

Add Book | {book name}
Add a book at first place in the shelf. 
If the book already is present on the shelf, ignore the command. 

Take Book | {book name}
Remove the book with the given name only if the book is on the shelf, otherwise ignore this command.

Swap Books | {book1} | {book2}
If both books are on the shelf, swap their places. 

Insert Book | {book name}
Add a book at the end of the book collection. 

Check Book | {index}
Print the name of the book on the given index the book.
If the index is invalid, ignore the command.


Input
On the 1st line, you will receive a string, representing book names, separated with "&".
On the next lines, until you receive "Done", you will receive commands in the format described above.

Output
Print the collection of books joined by ", ".
"{firstBook}, {secondBook}, …{lastBook}"

Constraints
You won't receive duplicate book names in the initial list of books.

Examples: 

In:
Don Quixote&The Great Gatsby&Moby Dick&Hamlet
Add Book | The Odyssey
Take Book | Don Quixote
Insert Book | Alice's Adventures in Wonderland
Check Book | 3
Done

Out:
Hamlet
The Odyssey, The Great Gatsby, Moby Dick, Hamlet, Alice's Adventures in Wonderland
*/



function solve(input) {
    let shelfWithBooks = input.shift().split('&');
    let command;

    function add(params) {
        if (!shelfWithBooks.includes(params)) {
            return shelfWithBooks.unshift(params);
        }
    }

    function take(params) {
        if (shelfWithBooks.includes(params)) {
            let i = shelfWithBooks.indexOf(params);
            return shelfWithBooks.splice(i, 1);
        }
    }
    function swap(book1, book2) {
        if (shelfWithBooks.includes(book1) &&
            shelfWithBooks.includes(book2)) {
            let iBook1 = shelfWithBooks.indexOf(book1);
            let iBook2 = shelfWithBooks.indexOf(book2);
            shelfWithBooks[iBook1] = book2;
            shelfWithBooks[iBook2] = book1
        }
    }

    function insert(params) {
        return shelfWithBooks.push(params);
    }

    function check(index) {
        if (index >= 0 && index < shelfWithBooks.length) {
            return console.log(shelfWithBooks[+index]);
        }
    }
    while ((command = input.shift()) !== 'Done') {
        let tokens = command.split(' | ');
        if (tokens[0] === 'Add Book') {
            add(tokens[1]);
        } else if (tokens[0] === 'Take Book') {
            take(tokens[1])
        } else if (tokens[0] === 'Swap Books') {
            swap(tokens[1], tokens[2]);
        } else if (tokens[0] === 'Insert Book') {
            insert(tokens[1]);
        } else {
            check(tokens[1]);
        }
    }

    console.log(shelfWithBooks.join(', '));
}
