/*
A group of friends decide to go to a trip for a few days during spring vacation. They have a certain budget.
Your task is to calculate their expenses during the trip and find out 
if they are going to have enough money to finish the vacation. 


Create a program that calculates travelling expenses by entering the following information:
Days of the vacation
Budget - its for the whole group
The count of people
Fuel per kilometer – the price for fuel that their car consumes per kilometer
Food expenses per person
Hotel room price for one night – again, for one person
If the group is bigger than 10, they receive a 25% discount from the total hotel expenses. 


Every day, they travel some distance and you have to calculate the expenses for the travelled kilometers. 
Every third and fifth day, they have some additional expenses, which are 40% of the current value of the expenses. 
Every seventh day, their expenses are reduced, because they withdraw (receive) a small amount of money – 
you can calculate it by dividing the amount of the current expenses by the group of people.


If the expenses exceed the budget at some point, stop calculating and print the following message:
"Not enough money to continue the trip"
If the budget is enough:
"You have reached the destination. You have {money}$ budget left."
Print the result formatted 2 digits after the decimal separator.


Input / Constraints
On the 1st line, you are going to receive the days of the trip – an integer in the range [1…100]
On the 2nd line – the budget – a real number in the range [0.00 – 1000000.00]
On the 3rd line - the group of people – an integer in the rang [1 - 50]
On the 4th line – the price for fuel per kilometer – a real number [0.00 – 20.00]
On the 5th line – food expenses per person for a day – a real number [0.00 – 50.00]
On the 6th line – the price for a room for one night per person – a real number [0.00 – 1000.00]
On the next n lines – one for each of the days – the travelled distance in kilometers per day– a real number in the range [0.00 - 1000]


Output
"Not enough money to continue the trip. You need {money}$ more." – 
if the budget is not enough
"You have reached the destination. You have {money}$ budget left." – if it’s enough.
Print the result formatted 2 digits after the decimal separator.


Sample case:

In:
7
12000
5
1.5
10
20
512
318
202
154
222
108
123

Out:
You have reached the destination. You have 5083.48$ budget left.

*/
function solve(input = []) {
  let days = +input.shift();
  let budget = +input.shift();
  let numOfPeople = +input.shift();
  let pricePerKM = +input.shift();
  let foodExpensesPerDay = +input.shift();
  let pricePerNight = +input.shift();

  if (numOfPeople > 10) {
    pricePerNight *= 0.75;
  }

  let expenses = days * numOfPeople * (foodExpensesPerDay + pricePerNight);

  for (let i = 1; i <= days; i++) {
    let kmPerDay = +input.shift();
    expenses += kmPerDay * pricePerKM;

    if (i % 3 === 0 || i % 5 === 0) {
      expenses *= 1.4;
    }
    if (i % 7 === 0) {
      expenses -= expenses / numOfPeople;
    }

    if (expenses > budget) {
      console.log(
        `Not enough money to continue the trip. You need ${(
          expenses - budget
        ).toFixed(2)}$ more.`
      );
      return;
    }
  }

  console.log(
    `You have reached the destination. You have ${(budget - expenses).toFixed(
      2
    )}$ budget left.`
  );
}
