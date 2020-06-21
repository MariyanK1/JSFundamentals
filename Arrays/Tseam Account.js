/*
As a gamer, Peter has Tseam Account. He loves to buy new games. 
You are given Peter's account with all of his games-> strings, separated by space. 
Until you receive "Play!" you will be receiving commands which Peter does with his account.`

You may receive the following commands:
Install {game}
Uninstall {game}
Update {game}
Expansion {game}-{expansion}
If you receive Install command, you should add the game at last position in the account, but only if it isn't installed already.
If you receive Uninstall command, delete the game if it exists.
If you receive Update command, you should update the game if it exists and place it on last position.
If you receive Expansion command, you should check if the game exists and insert after it the expansion in the following format: "{game}:{expansion}";

Input
On the first input line you will receive Peter`s account - sequence of game names, separated by space.
Until you receive "Play!" you will be receiving commands. 

Output
As output you must print Peter`s Tseam account. 

Constraints
The command will always be valid.
The game and expansion will be strings and will contain any character, except '-'.
Allowed working time / memory: 100ms / 16MB.

Sample case:

In:
['CS WoW Diablo',
'Install LoL',
'Uninstall WoW',
'Update Diablo',
'Expansion CS-Go',
'Play!']

Out:
CS CS:Go LoL Diablo

*/


function solve(input = []) {
  let games = input.shift().split(" ");
  let commands;

  while ((commands = input.shift()) !== "Play!") {
    let tokens = commands.split(" ");
    let command = tokens[0];
    let game = tokens[1];
    let splitted = game.split("-");

    if (command === "Install" && games.indexOf(game) === -1) {
      games.push(game);
    } else if (command === "Uninstall" && games.indexOf(game) >= 0) {
      let index = games.indexOf(game);
      games.splice(index, 1);
    } else if (command === "Update" && games.indexOf(game) >= 0) {
      let ind = games.indexOf(game);
      let el = games[ind];
      games.splice(ind, 1);
      games.push(el);
    } else if (command === "Expansion" && games.indexOf(splitted[0]) >= 0) {
      let game = splitted[0];
      let up = splitted[1];
      let i = games.indexOf(game);

      games.splice(i + 1, 0, `${game}:${up}`);
    }
  }

  console.log(games.join(" "));
}
