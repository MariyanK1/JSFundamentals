/*
Create a program that checks if a target plunder is reached. First you will receive how many days the pirating lasts.
Then you will receive how much the pirates plunder for a day. Last you will receive the expected plunder at the end.

Calculate how much plunder the pirates manage to gather. Each day they gather plunder.

Keep in mind that every third day they attack more ships and they add additional
plunder to their total gain which is 50% of the daily plunder.

Every fifth day the pirates encounter a warship and after the battle they lose 30% of their total plunder.

If the gained plunder is more or equal to the target print the following:
"Ahoy! {totalPlunder} plunder gained."

If the gained plunder is less than the target. Calculate the percentage left and print the following:
"Collected only {percentage}% of the plunder."
Both numbers should be formatted to the 2nd decimal place.

Input
⦁	On the 1st line you will receive the days of the plunder – an integer number in the range [0…100000]
⦁	On the 2nd line you will receive the daily plunder – an integer number in the range [0…50]
⦁	On the 3rd line you will receive the expected plunder – a real number in the range [0.0…10000.0]

Output
⦁	 In the end print whether the plunder was successful or not following the format described above.

Sample Case:

In:
5
40
100

Out:
Ahoy! 154.00 plunder gained.
*/

function solve(input = []) {

    let days = +input.shift();
    let daliyPlunder = +input.shift();
    let goal = +input.shift();
    let result = 0;
    
    for (let i = 1; i <= days; i++) {
        result += daliyPlunder;

        if (i % 3 === 0) {
            result += daliyPlunder * 0.50;
        }
        if (i % 5 === 0) {
            result -= result * 0.30
        }
    }

    if (result >= goal) {
        console.log(`Ahoy! ${result.toFixed(2)} plunder gained.`);
    }

    else {
        console.log(`Collected only ${((result / goal) * 100).toFixed(2)}% of the plunder.`);
    }
}
