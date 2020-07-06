/*
Tom is a world of tanks player and he likes to collect premium tanks.
You will receive a list of Tom's already owned premium vehicles on a single line separated by ", ".

On the next n lines you will receive commands that could be:

Add, {tankName}: Check if he already owns the wanted tank. 
If he owns it, print on console:  "Tank is already bought"
If not, print on console:  "Tank successfully bought" and add it to the tank list.

Remove, {tankName}: Check if he owns the tank.
If he owns it print on console:  "Tank successfully sold" and remove it from the tank list.
If not print on console: "Tank not found"

Remove At, {index}: Check if the index is in the range of the list.
If not print on console: "Index out of range" and continue.
If it’s in range, remove at the given index and print on console: "Tank successfully sold"

Insert, {index}, {tankName}: Check if the index is in range of the list and check if he already owns the tank.
If not print on console: "Index out of range" and continue.
If it's in range and he doesn't own the tank then add the tank at the given index and print on console:
"Tank successfully bought"
If the tank is in range and he owns it already than print on console:
"Tank is already bought"

After you go through all the commands you need to print the list on a single line separated by ", ".

Input
The first input line will contain the list of already owned tanks.
The second input line  will be  the number of commands – an integer number in range [0…50].
On the next input lines you will be receiving commands.

Output
As output you must print a single line containing the elements of the list, joined by  ", ".

Sample Case:

In:
T 34, T 34 B, T92, AMX 13 57
4
Add, T 34
Remove, AMX CDC
Insert, 10, M60
Remove At, 1

Out:
Tank is already bought
Tank not found
Index out of range
Tank successfully sold
T 34, T92, AMX 13 57
*/
function solve(input = []) {
  let garage = input.shift().split(", ");
  let numOfCommands = +input.shift();

  for (let i = 1; i <= numOfCommands; i++) {
    let command = input.shift().split(", ");

    switch (command[0]) {
      case "Add":
        let name = command[1];
        if (garage.indexOf(name) === -1) {
          garage.push(name);
          console.log(`Tank successfully bought`);
        } else {
          console.log(`Tank is already bought`);
        }
        break;

      case "Remove":
        let n4me = command[1];
        if (garage.indexOf(n4me) === -1) {
          console.log(`Tank not found`);
        } else {
          let index = garage.indexOf(n4me);
          garage.splice(index, 1);
          console.log(`Tank successfully sold`);
        }
        break;

      case "Remove At":
        let i = +command[1];

        if (i >= 0 && i < garage.length) {
          garage.splice(i, 1);
          console.log(`Tank successfully sold`);
        } else {
          console.log(`Index out of range`);
        }
        break;

      case "Insert":
        let index = +command[1];
        let n = command[2];
        if (index < 0 || index > garage.length) {
          console.log(`Index out of range`);
        } else if (garage.indexOf(n) >= 0) {
          console.log(`Tank is already bought`);
        } else {
          garage.splice(index, 0, n);
          console.log(`Tank successfully bought`);
        }
        break;
    }
  }

  console.log(garage.join(", "));
}
