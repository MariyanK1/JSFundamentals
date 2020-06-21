/*
You will receive a single number. You have to write a function, 
that returns the sum of all even and all odd digits from that number. 

*/

function solve(input) {
  let stringy = input.toString().split("");
  let oddSum = 0;
  let evenSum = 0;

  for (let i = 0; i < stringy.length; i++) {
    let num = Number(stringy[i]);
    if (num % 2 === 0) {
      evenSum += num;
    } else {
      oddSum += num;
    }
  }
  console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}
