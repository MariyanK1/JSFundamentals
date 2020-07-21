/*
Write a program that manages a database of tickets. A ticket has a destination, a price and a status.
Your program will receive two arguments - the first is an array of strings for ticket descriptions and the second is a string,
representing a sorting criterion.

The ticket descriptions have the following format:
<destinationName>|<price>|<status>

Store each ticket and at the end of execution return a sorted summary of all tickets,
sorted by either destination, price or status, depending on the second parameter that your program received.
Always sort in ascending order (default behavior for alphabetical sort). If two tickets compare the same, use order of appearance.
See the examples for more information.

Input
Your program will receive two parameters - an array of strings and a single string.

Output
Return a sorted array of all the tickets that where registered.

Examples
Input:
['Philadelphia|94.20|available',
 'New York City|95.99|available',
 'New York City|95.99|sold',
 'Boston|126.20|departed'],
'destination'	


Output:
[ Ticket { destination: 'Boston',
    price: 126.20,
    status: 'departed' }, 
  Ticket { destination: 'New York City',
    price: 95.99,
    status: 'available' }, 
  Ticket { destination: 'New York City',
    price: 95.99,
    status: 'sold' }, 
  Ticket { destination: 'Philadelphia',
    price: 94.20,
    status: 'available' } ]
['Philadelphia|94.20|available',
 'New York City|95.99|available',
 'New York City|95.99|sold',
 'Boston|126.20|departed'],
'status'	[ Ticket { destination: 'Philadelphia',
    price: 94.20,
    status: 'available' },
  Ticket { destination: 'New York City',
    price: 95.99,
    status: 'available' },
  Ticket { destination: 'Boston',
    price: 126.20,
    status: 'departed' },
  Ticket { destination: 'New York City',
    price: 95.99,
    status: 'sold' } ]


*/


function tickets(input = [], criteria) {
    let obj = {}
    for (const iterator of input) {
        let [city, price, status] = iterator.split('|');
        price = Number(price);
        if (!obj.hasOwnProperty(city)) {
            obj[city] = { price: price, status: status }
        }
        obj[city] = { price: price, status: status }

    }

    console.log(obj);
}

tickets(['Philadelphia|94.20|available',
    'New York City|95.99|available',
    'New York City|95.99|sold',
    'Boston|126.20|departed'],
    'destination')
