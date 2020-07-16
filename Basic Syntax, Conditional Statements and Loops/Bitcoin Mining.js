/*

Write a JavaScript program that calculates the total amount of bitcoins you purchased with the gold you mined during
your shift at the mine. Your shift consists of a certain number of days where you mine an amount of gold in grams.
Your program will receive an array with the amount of gold you mined each day, where the first day of your shift is the first index of the array. 
Also, someone was stealing every third day from the start of your shift 30% from the mined gold for this day.

For the different exchanges use these prices:
1 Bitcoin	11949.16 lv.
1 g of gold	67.51 lv.

Input
You will receive an array of numbers, representing your shift at the mine.

Output
Print on the console these lines in the following formats:

First line prints the total amount of bought bitcoins:
 "Bought bitcoins: {count}"

Second line prints which day you bought your first bitcoin: 
 "Day of the first purchased bitcoin: {day}"

In case you did not purchased any bitcoins, do not print the second line.
Third line prints the amount of money that’s left after the bitcoin purchases rounded by the second digit after the decimal point:
 "Left money: {money} lv."

Constraints
The input array may contain up to 1,000 elements
The numbers in the array are in range [0.01..5,000.00] inclusive
Allowed time/memory: 100ms/16MB

Sample case:

In:
[100,200,300]

Out:
Bought bitcoins: 2
Day of the first purchased bitcoin: 2
Left money: 10531.78 lv.

In:
[3124.15, 504.212, 2511.124]

Out:
Bought bitcoins: 30
Day of the first purchased bitcoin: 1
Money left: 5144.11 lv.
*/



function bitcoinMining(input = []) {
    let bitcoinPrice = 11949.16;
    let pricerPerGramGold = 67.51;
    let totalSum = 0;
    let days = 0;
    let boughtBitcoins = 0;
    let dayOfPurchase = 0;
    for (let i = 0; i < input.length; i++) {
        let gramsGold = input[i];
        days++;

        if (days % 3 === 0) {
            gramsGold = gramsGold * 0.70;
            totalSum += gramsGold * pricerPerGramGold;

            while (totalSum >= bitcoinPrice) {
                totalSum -= bitcoinPrice;

                if (boughtBitcoins <= 0) {
                    boughtBitcoins++;
                    dayOfPurchase = days;
                } else {
                    boughtBitcoins++;
                }
            }
        } else {
            totalSum += gramsGold * pricerPerGramGold;

            while (totalSum >= bitcoinPrice) {
                totalSum -= bitcoinPrice;
                if (boughtBitcoins <= 0) {
                    boughtBitcoins++;
                    dayOfPurchase = days;
                } else {
                    boughtBitcoins++;
                }
            }
        }
    }

    if (boughtBitcoins <= 0) {
        console.log(`Bought bitcoins: ${boughtBitcoins}`);
        console.log(`Left money: ${totalSum.toFixed(2)} lv.`);
    } else {
        console.log(`Bought bitcoins: ${boughtBitcoins}`);
        console.log(`Day of the first purchased bitcoin: ${dayOfPurchase}`);
        console.log(`Left money: ${totalSum.toFixed(2)} lv.`);
    }
}
