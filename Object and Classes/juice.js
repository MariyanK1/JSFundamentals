/*

You will be given different juices, as strings. You will also receive quantity as a number.
If you receive a juice, you already have, you must sum the current quantity of that juice, with the given one.

When a juice reaches 1000 quantity, it produces a bottle. You must store all produced bottles and you must print them at the end.

Note: 1000 quantity of juice is one bottle. If you happen to have more than 1000,
you must make as much bottles as you can, and store what is left from the juice.

Example: You have 2643 quantity of Orange Juice – this is 2 bottles of Orange Juice and 643 quantity left.

Input
The input comes as array of strings. Each element holds data about a juice and quantity in the following format:
“{juiceName} => {juiceQuantity}”

Output
The output is the produced bottles. The bottles are to be printed in order of obtaining the bottles.
Check the second example bellow - even though we receive the Kiwi juice first, we don’t form a bottle of Kiwi
juice until the 4th line, at which point we have already create Pear and Watermelon juice bottles,
thus the Kiwi bottles appear last in the output.

*/

function juice(input = []) {
    const bottles = new Map();

    input.reduce((acc, curr) => {
        let [fruit, quantity] = curr.split(" => ");
        quantity = Number(quantity);

        if (!acc.hasOwnProperty(fruit)) {
            acc[fruit] = 0;
        }
        acc[fruit] += quantity;

        if (acc[fruit] >= 1000) {
            if (!bottles.has(fruit)) {
                bottles.set(fruit, 0);
            }

            bottles.set(fruit, bottles.get(fruit) + parseInt(acc[fruit] / 1000));
            acc[fruit] %= 1000;
        }

        return acc;
    }, {});


    for (let [fruit, quantity] of bottles) {
        console.log(`${fruit} => ${quantity}`);
    }
}


juice(['Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789'])
