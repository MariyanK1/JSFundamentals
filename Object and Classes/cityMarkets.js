/*
You have been tasked to follow the sales of products in the different towns.
For every town you need to keep track of all the products sold, and for every product, the amount of total income.
The town and product are both strings. The amount of sales and price for one unit will be numbers.
Store all towns, for every town, store its products, and for every product, its amount of total income.
The total income is calculated with the following formula - amount of sales * price for one unit.
If you receive as input a town you already have, you should just add the new product to it.

Input
The input comes as array of strings. Each element will represent data about a product and its sales. The format of input is:
{town} -> {product} -> {amountOfSales} : {priceForOneUnit}

Output
As output you must print every town, its products and their total income in the following format:
“Town – {townName}
 $$${product1Name} : {productTotalIncome}
 $$${product2Name} : {productTotalIncome}
 ...”
The order of output for each of those entries is - by order of entrance.

Examples

Input
['Sofia -> Laptops HP -> 200 : 2000',
'Sofia -> Raspberry -> 200000 : 1500',
'Sofia -> Audi Q7 -> 200 : 100000',
'Montana -> Portokals -> 200000 : 1',
'Montana -> Qgodas -> 20000 : 0.2',
'Montana -> Chereshas -> 1000 : 0.3']	

Output
Town - Sofia
$$$Laptops HP : 400000
$$$Raspberry : 300000000
$$$Audi Q7 : 20000000
Town - Montana
$$$Portokals : 200000
$$$Qgodas : 4000
$$$Chereshas : 300

*/


function cityMarkets(input = []) {
    let result = new Map;
    for (const line of input) {
        let [city, product, values] = line.split(/\s\-\>\s/);
        values = values.split(/\s\:\s/).map(Number);


        if (!result.has(city)) {
            result.set(city, new Map);
            result.get(city).set(product, values[0] *= values[1]);
        } else {
            result.get(city).set(product, values[0] *= values[1]);
        }
    }


    let final = result.entries();

    for (const iterator of final) {
        console.log(`Town - ${iterator[0]}`);
        for (const [key, value] of iterator[1]) {
            console.log(`$$$${key} : ${value}`);
        }
    }
}

cityMarkets(['Sofia -> Laptops HP -> 200 : 2000',
    'Sofia -> Raspberry -> 200000 : 1500',
    'Sofia -> Audi Q7 -> 200 : 100000',
    'Montana -> Portokals -> 200000 : 1',
    'Montana -> Qgodas -> 20000 : 0.2',
    'Montana -> Chereshas -> 1000 : 0.3'])
