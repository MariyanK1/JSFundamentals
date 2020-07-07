/*
Create a program that calculates what percentage you can cover of a 6-sided gift box (all sides are equal and square).

First, you will receive the size of a side. Also, you will receive the sheets of paper you have.
Last, you will receive how much area covers a single sheet of paper.

First, you need to calculate the area of the gift box. Then you have to calculate how much
area you can cover with the paper available. Keep in mind that every third sheet covers only 25% of the usual area.
You have to calculate what percentage of the gift box you’ve covered. Percentage can exceed 100%!
In the end, print the percentage of the area covered, formatted to the 2nd decimal place, in the following format:
"You can cover {percentage}% of the box." 

Input
⦁On the 1st line you will receive the size of a side – a real number in the range [0.0…50.0]
⦁On the 2rd line you will receive the number of sheets of paper – an integer number in the range [0…1000]
⦁On the 3th line you will receive the area a single sheet of paper covers – a real number in the range[0.0…50.0]
⦁The input will always be in the right format.

Output
⦁In the end print the percentage of the area covered formatted to the 2nd decimal place in the format described above.
Constraints
⦁Percentage can be over 100%.
⦁All numbers are centimeters.

Sample Case:

In:
5
30
4

Out:
You can cover 60.00% of the box.
*/


function solve(input) {
    let sizeOfSide = +input.shift();
    let numOfSheets = +input.shift();
    let areOfSheet = +input.shift();

    let totalsize = sizeOfSide * sizeOfSide * 6;
    let covered = 0;

    for (let i = 1; i <= numOfSheets; i++) {
        
        if (i % 3 === 0) {
            covered += areOfSheet * 0.25;
        }

        else {
            covered += areOfSheet;
        }
    }
    let percent = covered / totalsize * 100;
    console.log(`You can cover ${percent.toFixed(2)}% of the box.`);
}
