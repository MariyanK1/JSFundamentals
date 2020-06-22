/*
Create a program that helps you keep track of the shops that you want to visit. You will receive the list 
of shops you have planned on checking out on a single line, separated by a single space in the following format:
"{shop1} {shop2} {shop3}… {shopn}"

Then you will receive a number – n - a count of commands you need to execute over your list.

There are four possible commands:
"Include {shop}":
Add the shop at the end of your list.

"Visit {first/last} {numberOfShops}"
Remove either the "first" or the "last" number of shops from your list, depending on the input. 
If you have less shops on your list than the given number, skip this command.

"Prefer {shopIndex1} {shopIndex2}":
If both of the shop indexes exist in your list, take the shops that are on them and change their places. 

"Place {shop} {shopIndex}"
Insert the shop after the given index, only if the resulted index exists.
In the end print the manipulated list in the following format:

"Shops left:
{shop1} {shop2}… {shopn}"


Input / Constraints
On the 1st line, you will receive the starting list with the names of the shops separated by a single space.
On the 2nd line, you will receive the number of commands - n – an integer in range [1…100]
On the next n lines you will be receiving commands in the format described above. 

Output
Print the list after the manipulations in the format described above.

Sample case:

In:
Bershka CandyStore ThriftShop Armani Groceries ToyStore PeakStore
5
Include HM
Visit first 2
Visit last 1
Prefer 3 1
Place Library 2

Out:
Shops left:
ThriftShop ToyStore Groceries Library Armani PeakStore

*/

function solve(input = []) {
    let shopList = input.shift().split(' ');
    let commandCount = Number(input.shift());

    for (let i = 1; i <= commandCount; i++) {
        let commands = input.shift().split(' ')

        switch (commands[0]) {
            case 'Include':
                shopList.push(commands[1])
                break;
            case 'Visit':
                let firstOrLast = commands[1];
                let numOfDeletes = Number(commands[2]);

                if (shopList.length >= numOfDeletes) {

                    switch (firstOrLast) {
                        case 'first':
                            for (let i = 1; i <= numOfDeletes; i++) {
                                shopList.shift()
                            }
                            break;

                        case 'last':
                            for (let i = 1; i <= numOfDeletes; i++) {
                                shopList.pop()
                            }
                            break;
                    }
                }
                break;

            case 'Prefer':
                let firstIndex = +commands[1];
                let secondIndex = +commands[2];

                if (shopList.length > firstIndex && shopList.length > secondIndex) {
                    let indexEl = shopList[firstIndex];
                    let secIndexEl = shopList[secondIndex];
                    shopList.splice(firstIndex, 1, secIndexEl);
                    shopList.splice(secondIndex, 1, indexEl)
                }
                break;

            case 'Place':
                let shop = commands[1];
                let index = +commands[2];

                if (shopList.length > index + 1) {
                    shopList.splice(index + 1, 0, shop)
                }
        }
    }
    console.log('Shops left:');
    console.log(shopList.join(' '));
}
