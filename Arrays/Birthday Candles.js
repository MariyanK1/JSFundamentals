/*
https://www.hackerrank.com/challenges/birthday-cake-candles/problem
*/

function birthdayCakeCandles(ar) {
let blownCandles = 0;
let highestCandle = Math.max(...ar);

for (let i = 0; i < ar.length; i++) {
    if (ar[i] === highestCandle) {
        blownCandles++;
    }
}
return blownCandles
}
