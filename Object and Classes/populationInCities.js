/*
You have been tasked to create a register for different towns and their population.

Input
The input comes as array of strings. Each element will contain data for a town and its population in the following format:
“{townName} <-> {townPopulation}”
If you receive the same town twice, you should add the given population to the current one.

Output
As output, you must print all the towns, and their population.


*/
function population(input = []) {
    let obj = {};

    for (const line of input) {
        let [city, population] = line.split(' <-> ');
        population = Number(population);

        if (!obj.hasOwnProperty(city)) {
            obj[city] = population;
        } else {
            obj[city] += population;
        }
    }

    Object.entries(obj).forEach(el => {
        console.log(`${el[0]} : ${el[1]}`);
    })
}

population(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000'])
