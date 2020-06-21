/*
You're tasked to create a list of employees and their personal numbers.
You will receive an array of strings. Each string is an employee name and to assign them a personal 
number you have to findthe length of the name (whitespace included). 

Try to use an object.

At the end print all the list employees in the following format:
 "Name: {employeeName} -- Personal Number: {personalNum}" 
*/

function solve(input = []) {
    let outputObj = {};

    for (let i = 0; i < input.length; i++) {
        outputObj[input[i]] = input[i]
    }

    for (const key in outputObj) {
        console.log(`Name: ${key} -- Personal Number: ${key.length}`);
    }

}
