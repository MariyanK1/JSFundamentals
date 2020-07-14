/*
You are tasked to create a register for a company that produces cars.
You need to store how many cars have been produced from a specified model of a specified brand.

Input
The input comes as array of strings. Each element holds information in the following format:
“{carBrand} | {carModel} | {producedCars}”
The car brands and models are strings, the produced cars are numbers. If the car brand you’ve 
received already exists, just add the new car model to it with the produced cars as its value.
If the car model exists, just add the given value to the current one.

Output
As output you need to print - for every car brand, the car models, and number of cars produced from that model. The output format is:
“{carBrand}
  ###{carModel} -> {producedCars}
  ###{carModel2} -> {producedCars}
  ...”
The order of printing is the order in which the brands and models first appear in the input.
The first brand in the input should be the first printed and so on. For each brand, the first model
received from that brand, should be the first printed and so on. 


Examples

Input
['Audi | Q7 | 1000',
'Audi | Q6 | 100',
'BMW | X5 | 1000',
'BMW | X6 | 100',
'Citroen | C4 | 123',
'Volga | GAZ-24 | 1000000',
'Lada | Niva | 1000000',
'Lada | Jigula | 1000000',
'Citroen | C4 | 22',
'Citroen | C5 | 10']

Output
Audi
###Q7 -> 1000
###Q6 -> 100
BMW
###X5 -> 1000
###X6 -> 100
Citroen
###C4 -> 145
###C5 -> 10
Volga
###GAZ-24 -> 1000000
Lada
###Niva -> 1000000
###Jigula -> 1000000


*/





function cars(input = []) {
    let carObj = {};

    for (const line of input) {
        let tokens = line.split(/\b\s\|\s\b/);
        let carBrand = tokens.shift();
        let series = tokens[0]
        let producedCars = Number(tokens[1])

        if (!carObj.hasOwnProperty(carBrand)) {
            carObj[carBrand] = [series, producedCars]
        } else {
            if (carObj[carBrand].includes(series)) {
                let index = carObj[carBrand].indexOf(series);
                carObj[carBrand][index + 1] += producedCars
            } else {
                carObj[carBrand].push(series, producedCars)
            }
        }
    }

    let arr = Object.entries(carObj);

    for (const arrEl of arr) {
        console.log(arrEl.shift())
        let tokens = arrEl.shift();
        while (tokens.length > 0) {
            let series = tokens.shift();
            let producedCars = tokens.shift();

            console.log(`###${series} -> ${producedCars}`);
        }
    }
}

cars([
    'Mercedes-Benz | 50PS | 123',
    'Mini | Clubman | 20000',
    'Mini | Convertible | 1000',
    'Mercedes-Benz | 60PS | 3000',
    'Hyunday | Elantra GT | 20000',
    'Mini | Countryman | 100',
    'Mercedes-Benz | W210 | 100',
    'Mini | Clubman | 1000',
    'Mercedes-Benz | W163 | 200'
])
