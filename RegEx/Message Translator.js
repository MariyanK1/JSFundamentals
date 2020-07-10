/*
Create a program, that checks if inputs have a valid command and message and encrypt it.
You will receive n count of messages. For each message check if it’s valid.

A message is valid when:
The command is surrounded by '!', start with a uppercase letter, followed only by lowercase letters.
The command Is mininum 3 characters long
There is a colon after the command.
There is message consisting of alphabetical letters between '[' and ']'.
It has to be minimum 8 characters long.

Example for a valid message: 
"!Send!:[IvanisHere]"

You must check if the message is valid and if it is - encrypt it, if it isn’t - print the following message: 
"The message is invalid"

Encrypting a message means to take all letters from the message and turn them into ASCII numbers.

After successful encrypt, print it in the following format:
{command}: {number1} {number2} {number3} (…)
Note: Encrypt only the text in the message. If you have "[Ivan is Here]", the part that you need to encrypt is "Ivan is Here". 

Input
You receive a line - input that you have to check if it has a valid message.

Output
Print the result in format described above.

Sample Case:

In:
3
go:[outside]
!drive!:YourCarToACarWash
!Watch!:[LordofTheRings]

Out:
The message is invalid
The message is invalid
Watch: 76 111 114 100 111 102 84 104 101 82 105 110 103 115
*/


function regEx(input = []) {
  input.shift();
  let pattern = /\!(?<command>[A-Z][a-z]{3,})\!:\[(?<message>[A-Za-z]{8,})\]/
  let arr = []
  while (input.length > 0) {
    let line = input.shift()
    let match = pattern.exec(line);

    if (match === null) {
      console.log('The message is invalid');
    } else {
      let message = match[2];
      for (let i = 0; i < message.length; i++) {
        let ascii = message.charCodeAt(i)
        arr.push(ascii)

      }

      console.log(`${match[1]}: ${arr.join(' ')}`);
    }
  }
}

regEx(['2', '!Send!:[IvanisHere]', '*Time@:[Itis5amAlready]'])
