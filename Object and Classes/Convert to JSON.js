/*
Write a function that receives name, lastName, hairColor and sets them to an object.
Convert the object to JSON string and print it.
Input is provided as 3 single strings in the order stated above.
*/

function solve(name, lastName, hairColor) {
  let obj = { name: name, lastName: lastName, hairColor: hairColor };
  console.log(JSON.stringify(obj));
}
