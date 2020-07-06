/*
Our player is having trouble with his friend list and some guys are disappearing without a reason
so he asks you to create a program that will figure out what is going on and at the end will bring him a report.

On the first line you will receive all his friends separated by ", ".

On the next lines until the "Report" command you will receive commands.

The commands could be:

Blacklist {name}
Find the name in the friend list and change it to "Blacklisted" and print on the console:
"{name} was blacklisted."
If the name is not in the friend list print:
"{name} was not found." 

Error {index}  
Check if the username at the given index is not "Blacklisted" or "Lost". If it isn't, change the username to "Lost" and print on the console:
"{name} was lost due to an error." 

Change {index} {newName}  
Check if the user at index position is in range of the array. If he is, change the
current username with the new one and print on console:
"{currentName} changed his username to {newName}."

After you receive "Report" print on the console the count of blacklisted names, the count of lost names,
and the friend list separated by a single space.

Input
The first input line will contain the usernames that need to be stored.
On the next input lines until "Report" you will receive commands.

Output
The output should be in the following format:
"Blacklisted names: {blacklistedNamesCount}"
"Lost names: {lostNamesCount}"
"{name1} {name2} .. {nameN}"

Sample Case:

In:
Mike, John, Eddie
Blacklist Mike
Error 0
Error 1
Change 2 Mike123
Report

Out:
Mike was blacklisted.
John was lost due to an error.
Eddie changed his username to Mike123. 
Blacklisted names: 1 
Lost names: 1 
Blacklisted Lost Mike123
*/

function solve(input = []) {
  let names = input.shift().split(", ");
  let lost = 0;
  let blacklisted = 0;
  let command;

  while ((command = input.shift()) !== "Report") {
    let curr = command.split(" ");

    switch (curr[0]) {
      case "Blacklist":
        let name = curr[1];
        if (names.indexOf(name) === -1) {
          console.log(`${name} was not found.`);
          break;
        } else {
          for (let i = 0; i < names.length; i++) {
            if (names[i] === name) {
              blacklisted++;
              names[i] = "Blacklisted";
              console.log(`${name} was blacklisted.`);
              break;
            }
          }
        }
        break;
      case "Error":
        let index = +curr[1];
        let n = names[index];
        if (names[index] !== "Blacklisted" && names[index] !== "Lost") {
          names[index] = "Lost";
          lost++;
          console.log(`${n} was lost due to an error.`);
          break;
        }
        break;

      case "Change":
        let i = +curr[1];
        let y = curr[2];

        if (i >= 0 && i < names.length) {
          console.log(`${names[i]} changed his username to ${y}.`);
          names[i] = y;
          break;
        }
    }
  }

  console.log(`Blacklisted names: ${blacklisted} `);
  console.log(`Lost names: ${lost} `);
  console.log(names.join(" "));
}
