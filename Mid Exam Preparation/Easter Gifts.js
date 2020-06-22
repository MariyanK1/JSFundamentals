/*
As a good friend, you decide to buy presents for your friends.
Create a program that helps you plan the gifts for your friends and family. 
First, you are going to receive the gifts you plan on buying оn a single line, 
separated by space, in the following format:
"{gift1} {gift2} {gift3}… {giftn}"

Then you will start receiving commands until you read the "No Money" message.

There are three possible commands:

"OutOfStock {gift}"
Find the gifts with this name in your collection, if there are any, and change their values to "None".  

"Required {gift} {index}"
Replace the value of the current gift on the given index with this gift, if the index is valid. 

"JustInCase {gift}"
Replace the value of your last gift with this one. 

In the end, print the gifts on a single line, except the ones with value "None", 
separated by a single space in the following format:
"{gift1} {gift2} {gift3}… {giftn}"

Input / Constraints:
On the 1st line you are going to receive the names of the gifts, separated by a single space.
On the next lines, until the "No Money" command is received, you will be receiving commands.
The input will always be valid.


Output:
Print the gifts in the format described above.


Sample case:

In:
Eggs StuffedAnimal Cozonac Sweets EasterBunny Eggs Clothes
OutOfStock Eggs
Required Spoon 2
JustInCase ChocolateEgg
No Money

Out:
StuffedAnimal Spoon Sweets EasterBunny ChocolateEgg

*/

function solve(input = []) {
    let gifts = input.shift().split(' ');
    let commands = input.shift();

    while (commands !== 'No Money') {

        let tokens = commands.split(' ')
        let command = tokens[0];
        let item = tokens[1];

        switch (command) {
            case 'OutOfStock':
                for (let i = 0; i < gifts.length; i++) {
                    if (gifts[i] === item) {
                        gifts[i] = "None";
                    }
                }
                break;

            case 'Required':
                let index = +tokens[2];

                if (gifts.length > index) {
                    gifts[index] = item;
                }
                break;

            case 'JustInCase':
                gifts[gifts.length - 1] = item;
                break;

        }

        commands = input.shift();
    }

    let stringy = [];
    for (const gift of gifts) {
        if (gift !== 'None') {
            stringy.push(gift)
        }
    }

    console.log(stringy.join(' '));
}
