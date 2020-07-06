function x(input = []) {
    let beforeSail = input.slice(0, input.indexOf('Sail'));
    let events = input.slice(input.indexOf('Sail') + 1, input.indexOf('End'));

    let resultObj = {};

    for (const line of beforeSail) {
        let [city, population, gold] = line.split(('||'))
        population = Number(population);
        gold = Number(gold);

        if (!resultObj.hasOwnProperty(city)) {
            resultObj[city] = {};
            resultObj[city].population = population;
            resultObj[city].gold = gold
        } else {
            resultObj[city].population += population;
            resultObj[city].gold += gold;
        }

    }

    for (const event of events) {
        let [command, town, people, gold] = event.split('=>');

        switch (command) {
            case 'Plunder':
                resultObj[town].population -= people;
                resultObj[town].gold -= gold;
                console.log(`${town} plundered! ${gold} gold stolen, ${people} citizens killed.`);
                if (resultObj[town].gold <= 0 || resultObj[town].population <= 0) {
                    delete resultObj[town];
                    console.log(`${town} has been wiped off the map!`);
                }
                break;

            default:
                let prosper = people;

                if (prosper > 0) {
                    resultObj[town] += prosper;
                    let totalGold = resultObj[town].gold;
                    console.log(`${prosper} gold added to the city treasury. ${town} now has ${totalGold} gold.`);
                } else {
                    console.log(`Gold added cannot be a negative number!`);
                }
                break;
        }
    }

    function compare(a, b) {
        const goldA = a.gold;
        const goldB = b.gold;

        let comparison = 0;

        if (goldB > goldA) {
            comparison = 1;
        } else {
            comparison = -1;
        }

        return comparison
    }
    function alph(a, b) {
        a = arr[0][1];
        b = arr[0][1];

        return a.localeCompare(b)
    }
    let arr = Object.entries(resultObj).sort(compare || alph);

    if (arr.length === 0) {
        console.log("Ahoy, Captain! All targets have been plundered and destroyed!");
    } else {
        console.log(`Ahoy, Captain! There are ${arr.length} wealthy settlements to go to:`);

        arr.forEach(town => {
            console.log(`${town[0]} -> Population: ${town.population} citizens, Gold: ${town[0].gold} kg`);
        })
    }
}

x([
    'Nassau||95000||1000',
    'San Juan||930000||1250',
    'Campeche||270000||690',
    'Port Royal||320000||1000',
    'Port Royal||100000||2000',
    'Sail',
    'Prosper=>Port Royal=>-200',
    'Plunder=>Nassau=>94000=>750',
    'Plunder=>Nassau=>1000=>150',
    'Plunder=>Campeche=>150000=>690',
    'End'
])
