/*
Write a program, that helps a player figure how many battles he will need to play in a battle video game,
in order to unlock the next tank in the line.

On the first line you will receive the amount of experience that is needed to unlock the tank.
On the second line you will receive the count of battles.
On the next lines, you will receive the experience the player can gain in every battle.

Calculate if he can unlock the tank. Keep in mind that he gets 15% more experience for every third battle and 10% less for every fifth battle.
You also need to stop the program as soon as he collects the needed experience.

If he managed to gather the experience, print how many battles it took him in the following format:
"Player successfully collected his needed experience for {battleCount} battles."

If he was not able to do it, print the following message:
"Player was not able to collect the needed experience, {neededExperience} more needed."
Format the needed experience to the second decimal place.

Input
On the first line you will receive the needed experience amount –  a real number in the range [0.0….400000.0]
On the second line you will receive the count of battles – an integer number in the range 
[0….500]
On the next lines you will receive the experience earned per battle – a real number in the range 
[0.0….5000.0]

Output
If he managed to gather the experience:
"Player successfully collected his needed experience for {battleCount} battles."
If he was not able to do it:
"Player was not able to collect the needed experience, {neededExperience} more needed."
NOTE: Format the needed experience to the second decimal place.

Sample Case:

In:
500
5
50
100
200
100
30

Out:
Player successfully collected his needed experience for 5 battles.
*/

function solve(arr) {
    arr = arr.map(Number);
    let neededPoints = arr.shift();
    let battles = arr.shift();
    let totalPoints = 0;
     let num = 0;
    for (let i = 0; i < battles; i++) {
        num++;
        if (num % 3 === 0) {
            totalPoints += (arr[i] + arr[i] * 0.15);
        } else if (num % 5 === 0) {
            totalPoints += (arr[i] - arr[i] * 0.1);
        } else {
            totalPoints += arr[i];
        }
        if (totalPoints >= neededPoints || totalPoints === neededPoints) {
            console.log(`Player successfully collected his needed experience for ${num} battles.`);
            return;
        }
    }
    console.log(`Player was not able to collect the needed experience, ${(neededPoints - totalPoints).toFixed(2)} more needed.`);
}
