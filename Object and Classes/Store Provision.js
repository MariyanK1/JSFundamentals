/*
You will receive two arrays. The first array represents a current stock of the local store.
The second array will contain products which the store has ordered for delivery.
The following information applies to both arrays:
Every even index will hold the name of the product and on every odd index will hold the quantity of that product.
The second array could contain products that are already in the local store. If that happens increase the 
quantity for the given product.

You should store them into an object, 
and print them in the following format: (product -> quantity)
All of the arrays values will be strings.

Sample case:

In:
[
'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
],
[
'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
]

Out:
Chips -> 5
CocaCola -> 9
Bananas -> 44
Pasta -> 11
Beer -> 2
Flour -> 44
Oil -> 12
Tomatoes -> 70

*/

function solve(store = [], delivery = []) {
    class incomingItems {
        constructor(itemName, value) {
            this.itemName = itemName;
            this.value = value;
        }
    }
    for (let i = 0; i < store.length; i++) {
        if (i % 2 !== 0) {
            store[i] = +store[i];
        }
    }

    for (let i = 0; i < delivery.length; i += 2) {
        if (store.includes(delivery[i])) {
            let index = store.indexOf(delivery[i]);
            store[index + 1] += +delivery[i + 1];
        } else {
            store.push(delivery[i]);
            store.push(delivery[i + 1])
        }
    }
    let finalList = [];
    for (let i = 0; i < store.length; i += 2) {
        p = new incomingItems(store[i], store[i + 1]);
        finalList.push(p);
    }

    for (const key of finalList) {
        console.log(`${key.itemName} -> ${key.value}`);
    }
}
