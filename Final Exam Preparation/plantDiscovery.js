/*
You have now returned from your world tour. On your way you have discovered some new plants and you want to
gather some information about them and create an exhibition to see which plant is highest rated.

On the first line you will receive a number n. On the next n lines,
you will be given some information about the plants that you have discovered in the format: 
"{plant}<->{rarity}". Store that information, because you will need it later. If you receive a plant more than once, update its rarity.

After that until you receive the command "Exhibition" you will be given some of these commands:
Rate: {plant} - {rating} – add the given rating to the plant (store all ratings)

Update: {plant} - {new_rarity} – update the rarity of the plant with the new one

Reset: {plant} – remove all the ratings of the given plant
Note: If any of the command is invalid, print "error"

After the command "Exhibition" print the information that you have about the plants in the following format:
Plants for the exhibition:
- {plant_name}; Rarity: {rarity}; Rating: {average_rating formatted to the 2nd digit}
…
The plants should be sorted by rarity descending, then by average rating descending

Input / Constraints
You will recive the input as described above

Output
Print the information about all plants as described above

Examples

Input:
3
Arnoldii<->4
Woodii<->7
Welwitschia<->2
Rate: Woodii - 10
Rate: Welwitschia - 7
Rate: Arnoldii - 3
Rate: Woodii - 5
Update: Woodii - 5
Reset: Arnoldii
Exhibition

Output:
Plants for the exhibition:
- Woodii; Rarity: 5; Rating: 7.50
- Arnoldii; Rarity: 4; Rating: 0.00
- Welwitschia; Rarity: 2; Rating: 7.00

*/


function solve(input = []) {
    let plantsNum = +input.shift();
    let plants = {};
    for (let i = 0; i < plantsNum; i++) {
        let [plant, rarity] = input.shift().split('<->');
        rarity = +rarity;

        plants.hasOwnProperty(plant)
            ? plants[plant].rarity = rarity
            : plants[plant] = { Rarity: rarity, Rating: [] };
    }

    let betterInput = input.splice(0, input.indexOf('Exhibition'));

    for (const line of betterInput) {
        let [command, plant, ratingOrRarity] = line.split(': ');
        plant = plant.split(' - ');
        ratingOrRarity = +plant[1];
        let inputPlant = plant[0];
        let sum = 0
        switch (command) {
            case 'Rate':
                if (plants.hasOwnProperty(inputPlant)) {
                    plants[inputPlant].Rating.push(ratingOrRarity);

                    for (let i = 0; i < plants[inputPlant].Rating.length; i++) {
                        const el = plants[inputPlant].Rating[i];
                        sum += el;
                    }

                    let average = sum / plants[inputPlant].Rating.length;
                    sum = 0;
                    plants[inputPlant]['Average'] = average;
                } else {
                    console.log('error');
                }
                
                break;

            case 'Update':
                let newRarity = ratingOrRarity;
                if (plants.hasOwnProperty(inputPlant)) {
                    plants[inputPlant].Rarity = newRarity;
                } else {
                    console.log('error');
                }
                break;

            case 'Reset':
                if (plants.hasOwnProperty(inputPlant)) {
                    delete plants[inputPlant].Rating;
                    plants[inputPlant].Average = 0;
                } else {
                    console.log('error');
                }
                break;

            default:
                console.log('error')
                break;
        }

    }

    let arr = Object.entries(plants).sort((a, b) => b[1].Rarity - a[1].Rarity || b[1].Average - a[1].Average);

    console.log('Plants for the exhibition:');

    for (const obj of arr) {
        console.log(`- ${obj[0]}; Rarity: ${obj[1].Rarity}; Rating: ${obj[1].Average.toFixed(2)}`);
    }
}
