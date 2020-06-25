/*
After walking through fire, the group has reached the final step of the quest.
They have received a list with instructions that will help them resolve the last riddle that will lead them to the truth about the Hunting Games.

Create a program that follows given instructions. You will receive a collection of words on a single line, split by a single space.

They are not what they are supposed to be, so you have to follow the instructions in order to find the real message.

You will be receiving commands. Here are the possible ones:

Delete {index} – removes the word after the given index if it is valid.

Swap {word1} {word2} – find the given words in the collections if they exist and swap their places.

Put {word} {index} – add a word at the previous place {index} before the 
given one, if it is valid. Note: putting at the last index simply appends the word to the end of the list.

Sort – you must sort the words in descending order.

Replace {word1} {word2} – find the second word {word2} in the collection (if it exists) and replace it with the first word – {word1}.
Follow them until you receive the "Stop" command. After you have successfully followed the instructions, 
you must print the words on a single line, split by a space.


Input / Constraints
On the 1st line, you are going to receive the collection of words, split by a single space – strings
On the next lines, you are going to receive commands, until you receive the "Stop" command

Output
Print the words you have gathered on a single line, split by a single space

Examples:

Input:
Congratulations! You last also through the have challenge!
Swap have last
Replace made have
Delete 2
Put it 4
Stop	

Output:
Congratulations! You made it through the last challenge!

*/

function solve(input = []) {
  let sentence = input.shift().split(" ");
  let commands;

  while ((commands = input.shift()) !== "Stop") {
    let tokens = commands.split(" ");
    let command = tokens[0];
    let value = tokens[1];
    let value2 = tokens[2];

    if (command === "Delete") {
      let i = +value + 1;
      if (i < sentence.length && i >= 0) {
        sentence.splice(i, 1);
      }
    } else if (
      command === "Swap" &&
      sentence.includes(value) &&
      sentence.includes(value2)
    ) {
      let i = sentence.indexOf(value);
      let i2 = sentence.indexOf(value2);
      if (i >= 0 && i2 >= 0) {
        sentence[i] = value2;
        sentence[i2] = value;
      }
      
    } else if (command === "Put") {
      let i = +value2 - 1;

      if (i >= 0 && i < sentence.length) {
        sentence.splice(i, 0, value);
      }
    } else if (command === "Sort") {
      sentence.sort((a, b) => {return b.localeCompare(a)});
    } else if (command === "Replace" && sentence.includes(value2)) {
      sentence.splice(sentence.indexOf(value2), 1, value);
    }
  }

  console.log(sentence.join(" "));
}
