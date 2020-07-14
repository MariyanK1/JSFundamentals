/*
You have to create a sorted catalogue of store products. You will be given the products’ names and prices.
You need to order them by alphabetical order. 

Input
The input comes as array of strings. Each element holds info about a product in the following format:
“{productName} : {productPrice}”
The product’s name will be a string, which will always start with a capital letter, and the price will be a number.
You can safely assume there will be NO duplicate product input. The comparison for alphabetical order is case-insensitive.

Output
As output you must print all the products in a specified format. They must be ordered exactly as specified above. The products must be divided into groups, by the initial of their name. The group’s initial should be printed, and after that the products should be printed with 2 spaces before their names. For more info check the examples.

Sample case:

In:
['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10']

Out:
A
  Anti-Bug Spray: 15
  Apple: 1.25
  Appricot: 20.4
B
  Boiler: 300
D
  Deodorant: 10
F
  Fridge: 1500
T
  T-Shirt: 10
  TV: 1499
*/




function storeCatalogue(arr) {
    let products = new Map();
    for (let line of arr) {
        let data = line.split(/\b\s:\s\b/);
        let letter = line[0][0];
        if (!products.has(letter)) {
            products.set(letter, data);
        }
        else {
            products.set(letter, products.get(letter) + "," + data);
        }
    }
    let myProducts = new Map([...products.entries()].sort());
    for (let [letter, items] of myProducts) {
        console.log(letter);
        if (items.constructor !== Array) {
            items = items.split(',');
        }
        let products = [];
        for (let i = 0; i < items.length; i += 2) {
            let product = items[i];
            let price = items[i + 1];
            let line = product + ": " + price;
            products.push(line);
            products.sort();
        }
        for (let product of products) {
            console.log(`  ${product}`);
        }
    }
}

storeCatalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
]);
