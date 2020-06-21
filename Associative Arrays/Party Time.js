/*
There is a party at SoftUni. Many guests are invited and they are two types: VIP and regular. 
When guests come to the party check if he/she exists in any of the two reservation lists. 
The input will come as array of strings. 
You will be given the list with the guests before you receive a command "PARTY"
All reservation numbers will be with 8 chars
All VIP numbers start with digit
When you receive the command "PARTY" the guests start coming.
Output all guest, who didn't come to the party (VIP must be first) 

Input:
['7IK9Yo0h',
'9NoBUajQ',
'Ce8vwPmE',
'SVQXQCbc',
'tSzE5t0p',
'PARTY',
'9NoBUajQ',
'Ce8vwPmE',
'SVQXQCbc'
]

Output:
2
7IK9Yo0h
tSzE5t0p
*/

function solve(input = []) {
    let obj = {
        vip: [],
        regular: []
    }
    let command;
    while ((command = input.shift()) !== 'PARTY') {
        if (isNaN(+command[0])) {
            obj.regular.push(command)
        } else {
            obj.vip.push(command);
        }
    }
    input.slice(input.indexOf('PARTY'), input.length);

    input.forEach(guest => {
        if (obj.vip.includes(guest)) {
            let i = obj.vip.indexOf(guest);
            obj.vip.splice(i, 1);
        }

        if (obj.regular.includes(guest)) {
            let i = obj.regular.indexOf(guest);
            obj.regular.splice(i, 1);
        }
    })
    let concat = obj.vip.concat(obj.regular);
    console.log(concat.length);
    for (const item of concat) {
        console.log(item);
    }
}
