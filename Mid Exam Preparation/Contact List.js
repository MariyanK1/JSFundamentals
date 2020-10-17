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

      switch (action) {
         case 'Add':
            let name = tokens[0];
            let i = Number(tokens[1]);

            if (contacts.indexOf(name) >= 0 && i >= 0 && i < contacts.length) {
               contacts.splice(i, 0, name);
            }

            if (!contacts.indexOf(name)) {
               contacts.push(name);
            }
            break;

         case 'Remove':
            let index = Number(tokens[0]);

            if (index >= 0 && index < contacts.length) {
               contacts.splice(index, 1)
            }
            break;

         case 'Export':
            let startIndex = Number(tokens[0]);
            let count = Number(tokens[1]);

            if (count > contacts.length) {

               let el = contacts.slice(startIndex, contacts.length);

               console.log(el.join(' '));

            } else if (startIndex < contacts.length && startIndex >= 0) {

               let names = contacts.slice(startIndex, count + 1);

               console.log(names.join(' '));
            }
            break;

         case 'Print':
            return tokens[0] === 'Normal'
               ? `Contacts: ${contacts.join(' ')}`
               : `Contacts: ${contacts.reverse().join(' ')}`;
      }
   }
}

console.log(solve([
   'Alisson Bellamy Candace Tristan mariyan dragan kolio',
   'Remove 3',
   'Export 1 3',
   'Add Bellamy 2',
   'Print Normal'
]))
