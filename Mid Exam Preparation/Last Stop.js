/*
The group has reached Paris and went to visit "La Louvre". They accidently found a map behind "The Wedding at Canna" painting. 

It had some instructions, so they have decided to follow them and see where they will lead them. Your job is to help them.
Create a program that follows instructions in order to fulfil a quest. 


First, you will receive a collection of numbers – each representing a painting number. 
After that, you are going to be receiving instructions, until the "END" command is given.

Change {paintingNumber} {changedNumber} – find the painting with the first number in the collection (if it exists)
and change its number with the second number – {changedNumber}.

Hide {paintingNumber} – find the painting with this value and if it exists and hide it (remove it).

Switch {paintingNumber} {paintingNumber2} – find the given paintings in the collections if they exist and switch their places.

Insert {place} {paintingNumber} – insert the painting (paintingNumber) on the next place after the given one, if it exists.

Reverse – you must reverse the order of the paintings.

Once you complete the instructions, print the numbers of the paintings on a single line, split by a space.

Input / Constraints
On the 1st line, you are going to receive the numbers of the paintings, split by a single space – integer numbers in the range [1…1000]
On the next lines, you are going to receive commands, until you receive the "END" command

Output
Print the message you have received after the conversion of all numbers on a single line


Examples=>

In:
115 115 101 114 73 111 116 75
Insert 5 114
Switch 116 73
Hide 75
Reverse 
Change 73 70
Insert 10 85
END	

Out:
70 114 111 116 114 101 115 115

*/


function solve(input = []) {
  let paints = input.shift().split(" ");
  let command;

  while ((command = input.shift()) !== "END") {
    let tokens = command.split(" ");
    let commands = tokens[0];
    let numbah = tokens[1];
    let numbah2 = tokens[2];
    
    
    if (commands === "Change" && paints.includes(numbah)) {
      let index = paints.indexOf(numbah);
      paints.splice(index, 1, numbah2);
    } 
    
    else if (commands === "Hide" && paints.includes(numbah)) {
      let index = paints.indexOf(numbah);
      paints.splice(index, 1);
    }
    
    else if (
      commands === "Switch" &&
      paints.includes(numbah) &&
      paints.includes(numbah2)
    ) 
    
    {
      let x = paints.indexOf(numbah);
      let y = paints.indexOf(numbah2);

      let el = paints[x];
      let el2 = paints[y];

      paints[x] = el2;
      paints[y] = el;
    } 
    
    
    else if (commands === "Insert") {
      let i = +numbah;
      if (paints[i + 1]) {
        paints.splice(i + 1, 0, numbah2);
      }
    } else if (commands === "Reverse") {
      paints.reverse();
    }
  }

  console.log(paints.join(" "));
}
