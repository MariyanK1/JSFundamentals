/*


Create a program that helps you keep track of the contacts that you have.

You will receive the list of contacts you already have on a single line,
separated by a single space in the following format:
"{contact1} {contact2} {contact3}… {contactn}"

Then you will receive commands that you need to execute over your list. There are four possible commands:

⦁	"Add {contact} {index}":
⦁	If {contact} isn’t already contained – add it in the end of the collection.
⦁	If {contact} is already contained – add it on the given index, if the index exists.

⦁	"Remove {index}"
⦁	Remove the contact on the given index, if the index exists.

⦁	"Export {startIndex} {count}":

⦁	Print the next {count} contacts starting from the given {startIndex} (including), separated by a single space.
If the count requested is more than the contacts- just print them to the end. 
"{contact} {contact} {contact}"

⦁	"Print Normal/Reversed"
⦁	Print the contact list in normal (in the order they have been added) or reversed order and then stop the program:
"Contacts: {contact1} {contact2}… {contactn}"

Input
⦁	On the 1st line, you will receive the starting list with the names of the contacts separated by a single space.
⦁	On the next lines, you will receive commands in the format described above.

Output
⦁	Print the needed output upon the "Export" command.
⦁	Print the list after the manipulations upon the "Print" command in the format described above.

Sample case:

In:
Alisson Bellamy Candace Tristan
Remove 3
Add Bellamy 2
Print Normal

Out:
Contacts: Alisson Bellamy Bellamy Candace

*/

function solve(input = []) {
    let contacts = input.shift().split(' ');

    while (input.length !== 0) {
        let tokens = input.shift().split(' ');
        let action = tokens.shift();
        if (action === 'Add') {
            let name = tokens[0];
            let i = +tokens[1];
            if (
                contacts.indexOf(name) >= 0 &&
                i >= 0 &&
                i < contacts.length
            ) {
                contacts.splice(i, 0, name)
            }

            else if (contacts.indexOf(name) === -1) {
                contacts.push(name)
            }
        } else if (action === 'Remove') {
            let i = +tokens[0];

            if (i >= 0 && i < contacts.length) {
                contacts.splice(i, 1)
            }
        } else if (action === 'Export') {
            let startIndex = +tokens[0];
            let count = +tokens[1];

            if (count > contacts.length) {
                let el = [];
                for (let i = startIndex; i < contacts.length; i++) {
                    let element = contacts[i];
                    el.push(element)
                }
                console.log(el.join(' '));
            } else if (startIndex < contacts.length && startIndex >= 0) {
                let names = [];
                for (let i = startIndex; i < count; i++) {
                    let element = contacts[i];
                    names.push(element)
                }
                console.log(names.join(' '));
            }
        } else if (action === 'Print') {
            if (tokens[0] === 'Normal') {
                console.log(`Contacts: ${contacts.join(' ')}`);
            } else {
                console.log(`Contacts: ${contacts.reverse().join(' ')}`);
            }
        }
    }
}
