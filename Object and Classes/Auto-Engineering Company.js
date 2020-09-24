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

Input:
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

Output:
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




function x(input = []) {
    let obj = new Map;

    input.forEach(line => {
        let [brand, model, quantity] = line.split(' | ');
        quantity = Number(quantity);

        if (!obj.has(brand)) {
            obj.set(brand, new Map)
            obj.get(brand).set(model, quantity);
        } else {
            if (obj.get(brand).has(model)) {
                const newQuantity = obj.get(brand).get(model) + quantity;
                delete obj.get(brand).get(model);
                obj.get(brand).set(model, newQuantity)
            } else {
                obj.get(brand).set(model, quantity);
            }
        }
    });

    return Array.from(obj.keys()).forEach(brand => {
            console.log(brand);
            let arrBrands = Array.from(obj.get(brand).keys());
            let arrProducedCars = Array.from(obj.get(brand).values());

            for (const brand of arrBrands) {
                console.log(`###${brand} -> ${arrProducedCars.shift()}`);
            }
        });
}

console.log(x([
    'Audi | Q6 | 100',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10']))
