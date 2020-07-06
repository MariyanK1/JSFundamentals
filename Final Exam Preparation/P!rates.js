/*
Description

Until the "Sail" command is given you will be receiving:
Cities that you and your crew have targeted, with their population and gold, separated by "||".
If you receive a city which has been already received, you have to increase the population and gold with the given values.
After the "Sail" command, you will start receiving lines of text representing events until the "End" command is given. 

Events will be in the following format:

"Plunder=>{town}=>{people}=>{gold}"
You have successfully attacked and plundered the town, killing the given number of people and stealing the respective amount of gold. 
For every town you attack print this message: "{town} plundered! {gold} gold stolen, {people} citizens killed."
If any of those two values (population or gold) reaches zero, the town is disbanded.
You need to remove it from your collection of targeted cities and print the following message: "{town} has been wiped off the map!"
There will be no case of receiving more people or gold than there is in the city.

"Prosper=>{town}=>{gold}"
There has been a dramatic economic growth in the given city, increasing its treasury by the given amount of gold.
The gold amount can be a negative number, so be careful. If a negative amount of gold is given print: 
"Gold added cannot be a negative number!" and ignore the command.

If the given gold is a valid amount, increase the town's gold reserves by the respective amount 
and print the following message: "{gold added} gold added to the city treasury. {town} now has {total gold} gold."


Input
On the first lines, until the "Sail" command, you will be receiving strings representing the cities with their gold and population, separated by "||"
On the next lines, until the "End" command, you will be receiving strings representing the actions described above, separated by "=>"

Output
After receiving the "End" command if there are any existing settlements on your list of targets,
you need to print all of them, sorted by their gold in descending order, then by their name in ascending order, in the following format:

Ahoy, Captain! There are {count} wealthy settlements to go to:
{town1} -> Population: {people} citizens, Gold: {gold} kg
   …
{town…n} -> Population: {people} citizens, Gold: {gold} kg
If there are no settlements left to plunder, print:
"Ahoy, Captain! All targets have been plundered and destroyed!"

Constraints
The initial population and gold of the settlements will be valid, 32-bit integers, 
will never be negative or exceed the respective limits.
The town names in the events will always be valid towns that should be on your list.

Sample case:

In:
Tortuga||345000||1250
Santo Domingo||240000||630
Havana||410000||1100
Sail
Plunder=>Tortuga=>75000=>380
Prosper=>Santo Domingo=>180
End

Out:
Tortuga plundered! 380 gold stolen, 75000 citizens killed.
180 gold added to the city treasury. Santo Domingo now has 810 gold.
Ahoy, Captain! There are 3 wealthy settlements to go to:
Havana -> Population: 410000 citizens, Gold: 1100 kg
Tortuga -> Population: 270000 citizens, Gold: 870 kg
Santo Domingo -> Population: 240000 citizens, Gold: 810 kg


*/
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
