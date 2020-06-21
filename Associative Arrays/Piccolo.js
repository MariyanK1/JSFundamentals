/*
Write function that:
Records a car number for every car that enters the  parking lot
Removes a car number when the car goes out
Input will be array of strings in format [direction, carNumber]
Print the output with all car numbers which are in the parking lot sorted in ascending by number


Input	
['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU']

Output
CA2822UU
CA2844AA
CA9876HH
CA9999TT

*/

function solve(input) {
    let obj = {};
    let arr = [];
    input.forEach(car => {
        let oneCar = car.split(', ');
        obj[oneCar[1]] = oneCar[0];
    })

    Object.entries(obj).forEach(entry => {
        if (entry[1] === 'IN') {
            arr.push(entry[0])
        }
    })
    arr.sort((a, b) => a.localeCompare(b)) 
    arr.length === 0 ? console.log('Parking Lot is Empty') : console.log(arr.join('\n'));
    }
