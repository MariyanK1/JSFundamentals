/*
As a gladiator, Peter has to repair his broken equipment when he loses a fight. His equipment consists of helmet, 
sword, shield and armour. You will receive the Peter`s lost fights count. 
Every second lost game, his helmet is broken.
Every third lost game, his sword is broken.
When both his sword and helmet are broken in the same lost fight, his shield also brakes.
Every second time, when his shield brakes, his armour also needs to be repaired. 
You will receive the price of each item in his equipment. 

Calculate his expenses for the year for renewing his equipment. 

Input / Constraints

You will receive 5 parameters to your function:
First parameter – lost fights count – integer in the range [0, 1000].
Second parameter – helmet price - floating point number in range [0, 1000]. 
Third parameter – sword price - floating point number in range [0, 1000]. 
Fourth parameter – shield price - floating point number in range [0, 1000]. 
Fifth parameter – armor price - floating point number in range [0, 1000]. 

Output


As output you must print Peter`s total expenses for new equipment: "Gladiator expenses: {expenses} aureus"
Allowed working time / memory: 100ms / 16MB.

Sample case:

In:

7,
2,
3,
4,
5

Out:

Gladiator expenses: 16.00 aureus
*/

function solve(
  lostFightsCount,
  helmetPrice,
  swordPrice,
  shieldtPrice,
  armorPrice
) {
  let shieldCount = 0;
  let neededMoney = 0;

  for (let i = 1; i <= lostFightsCount; i++) {
    if (i % 2 === 0) {
      neededMoney += +helmetPrice;
    }
    if (i % 3 === 0) {
      neededMoney += +swordPrice;
    }
    if (i % 6 === 0) {
      neededMoney += +shieldtPrice;
      shieldCount++;
    }
    if (shieldCount % 2 === 0 && shieldCount > 0) {
      neededMoney += +armorPrice;
      shieldCount = 0;
    }
  }
  console.log(`Gladiator expenses: ${neededMoney.toFixed(2)} aureus`);
}
