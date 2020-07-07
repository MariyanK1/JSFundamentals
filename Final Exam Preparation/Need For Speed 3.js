/*
You have just bought the latest and greatest computer game – Need for Seed III.
We know that you can`t wait to start playing.
Pick your favorite cars and drive them all you want!

On the first line of the standard input you will receive an integer n – the number of cars that you can obtain.
On the next n lines the cars themselves will follow with their mileage and fuel available,
separated by "|" in the following format:

{car}|{mileage}|{fuel}

Then, you will be receiving different commands, each on a new line, separated by " : ", until the "Stop" command is given:

Drive : {car} : {distance} : {fuel} 
You need to drive the given distance and you will need the given fuel to do that. If the car doesn`t have enough fuel print:
"Not enough fuel to make that ride"
If the car has the required fuel available in the tank, increase its mileage with the given distance,
decrease its fuel with the given fuel and print: 
"{car} driven for {distance} kilometers. {fuel} liters of fuel consumed."
You like driving new cars only, so if the mileage of a car reaches 100 000 km, remove it from the collection(s).
Print:
"Time to sell the {car}!"

Refuel : {car} : {fuel}
Refill the tank of your car. 
Each tank can hold a maximum of 75 liters of fuel, so if the given amount of fuel is more than
you can fit in the tank, take only what is required to fill it up. 
Print a message in the following format:
"{car} refueled with {fuel} liters"

Revert : {car} : {kilometers}
Decrease the mileage of the given car with the given kilometers and print the kilometers you
have decreased it with in the following format:
"{car} mileage decreased by {amount reverted} kilometers"
If the mileage becomes less than 10 000km after it is decreased, just set it to 10 000km and 
DO NOT print anything.

Upon receiving the "Stop" command you need to print all cars in your possession,
sorted by their mileage in decscending order, then by their name in ascending order, in the following format:
"{car} -> Mileage: {mileage} kms, Fuel in the tank: {fuel} lt."

Input/Constraints
The mileage and fuel of the cars will be valid, 32-bit integers and will never be negative.
The fuel and distance amounts in the commands will never be negative.
The car names in the commands will always be valid cars in your possession.


Output
All the output messages with the appropriate formats are described in the problem description.


Sample Case:

In:
3
Audi A6|38000|62
Mercedes CLS|11000|35
Volkswagen Passat CC|45678|5
Drive : Audi A6 : 543 : 47
Drive : Mercedes CLS : 94 : 11
Drive : Volkswagen Passat CC : 69 : 8
Refuel : Audi A6 : 50
Revert : Mercedes CLS : 500
Revert : Audi A6 : 30000
Stop

Out:
Audi A6 driven for 543 kilometers. 47 liters of fuel consumed.
Mercedes CLS driven for 94 kilometers. 11 liters of fuel consumed.
Not enough fuel to make that ride
Audi A6 refueled with 50 liters
Mercedes CLS mileage decreased by 500 kilometers
Volkswagen Passat CC -> Mileage: 45678 kms, Fuel in the tank: 5 lt.
Mercedes CLS -> Mileage: 10594 kms, Fuel in the tank: 24 lt.
Audi A6 -> Mileage: 10000 kms, Fuel in the tank: 65 lt.
*/

function needForSpeed(input = []) {
    let numCars = Number(input.shift())
    let cars = input.splice(0, numCars);
    let objCars = {};

    for (const car of cars) {
        let [carModel, mileage, fuel] = car.split('|');
        mileage = Number(mileage);
        fuel = Number(fuel);

        if (!objCars.hasOwnProperty(carModel)) {
            objCars[carModel] = { mileage: mileage, fuel: fuel }
        }
    }

    let betterInput = input.splice(0, input.indexOf('Stop'));

    for (const line of betterInput) {
        let [command, carName, value, value2] = line.split(' : ');
        value = Number(value);
        value2 = Number(value2);

        switch (command) {
            case 'Drive':
                let distance = value;
                let fuel = value2;

                if (fuel > objCars[carName].fuel) {
                    console.log("Not enough fuel to make that ride");
                } else if (objCars[carName].fuel > fuel) {
                    objCars[carName].fuel -= fuel;
                    objCars[carName].mileage += distance;
                    console.log(`${carName} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`);

                    if (objCars[carName].mileage >= 100_000) {
                        console.log(`Time to sell the ${carName}!`);
                        delete objCars[carName];
                    }
                }
                break;

            case 'Refuel':
                let fuelForRefill = value;

                if (objCars[carName].fuel + fuelForRefill >= 75) {
                    console.log(`${carName} refueled with ${75 - objCars[carName].fuel} liters`);
                    objCars[carName].fuel = 75;
                } else {
                    objCars[carName].fuel += fuelForRefill;
                    console.log(`${carName} refueled with ${fuelForRefill} liters`);
                }
                break;

            case 'Revert':
                let KMs = value;

                if (objCars[carName].mileage - KMs <= 10_000) {
                    objCars[carName].mileage = 10_000;
                } else {
                    objCars[carName].mileage -= KMs;
                    console.log(`${carName} mileage decreased by ${KMs} kilometers`)
                }
                break;
        }
    }

    function sortByMileage(a, b) {
        a = a[1].mileage;
        b = b[1].mileage;

        let comp = 0;

        if (b > a) {
            comp = 1;
        } else if (a > b) {
            comp = -1
        }

        return comp
    }

    function sortAlphabetically(a, b) {
        a = arr[0];
        b = arr[0];

        return a.localeCompare(b)
    }

    let arr = Object.entries(objCars).sort((a, b) => sortByMileage(a, b) || sortAlphabetically(a, b));

    for (let i = 0; i < arr.length; i++) {
        console.log(`${arr[i][0]} -> Mileage: ${arr[i][1].mileage} kms, Fuel in the tank: ${arr[i][1].fuel} lt.`);
    }
}

needForSpeed([
    '4',
    'Lamborghini Veneno|11111|74',
    'Bugatti Veyron|12345|67',
    'Koenigsegg CCXR|67890|12',
    'Aston Martin Valkryie|99900|50',
    'Drive : Koenigsegg CCXR : 382 : 82',
    'Drive : Aston Martin Valkryie : 99 : 23',
    'Drive : Aston Martin Valkryie : 2 : 1',
    'Refuel : Lamborghini Veneno : 40',
    'Revert : Bugatti Veyron : 2000',
    'Stop'
])
