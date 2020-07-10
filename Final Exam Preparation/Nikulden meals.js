  /*
Create a program that keeps information about guests liked and unliked meals.
You will be receiving lines with commands until you receive the "Stop" command.

The possible commands are:

"Like-{guest}-{mea1}":
Add the {mea1} to the {guest}’s collection of meals.
If the guest doesn't exist, add it to your record. 
If the guest already has the meal in his collection, don’t add it.

"Unlike-{guest}-{meal}":
Remove  the meal of the given guest’s collection and print: 
"{Guest} doesn't like the {meal}."
You must keep the count of unliked meals!

If the guest doesn’t exist, print:
 "{Guest} is not at the party."

If the guest doesn’t have the meal at the like list, print:
 "{Guest} doesn't have the {meal} in his/her collection."

In the end, you have to print the guests with their liked meals sorted in descending order
by each guest meals count and then by their names in ascending order.

Then print the count of unliked meals in the format below
{Guest1}: {meal1}, {meal2}, {meal3}
{Guest2}: {meal1}, {meal2}
...
Unliked meals: {count of all unliked meals}

Input
You will be receiving lines until you receive the "Stop" command.
The input will always be valid.

Output
Print the guests with their meals in the format described above.
Print the count of unliked meals in the format described above.

Sample Case:

In:
Like-Krisi-shrimps
Unlike-Vili-carp
Unlike-Krisi-salad
Unlike-Krisi-shrimps
Stop

Out:
Vili is not at the party.
Krisi doesn't have the salad in his/her collection.
Krisi doesn't like the shrimps.
Krisi:
Unliked meals: 1
  */
  
  
  function nikuldenMeals(input = []) {

    let betterInput = input.splice(0, input.indexOf('Stop'));
    let resultObj = {};
    let unliked = 0;

    for (const line of betterInput) {
      let [command, name, meal] = line.split('-');

      switch (command) {
        case 'Like':
          if (!resultObj.hasOwnProperty(name)) {
            resultObj[name] = [meal];
          }
          else {
            if (!resultObj[name].includes(meal)) {
              resultObj[name].push(meal)
            }
          }
          break;

        default:
          if (resultObj.hasOwnProperty(name)) {
            if (resultObj[name].includes(meal)) {
              unliked++;
              resultObj[name].splice(resultObj[name].indexOf(meal), 1)
              console.log(`${name} doesn't like the ${meal}.`);
            }
            else if (!resultObj[name].includes(meal)) {
              console.log(`${name} doesn't have the ${meal} in his/her collection.`);
            }
          } else {
            console.log(`${name} is not at the party.`);
          }
          break;
      }
    }
    let arr = Object.entries(resultObj).sort((a, b) => b[1].length - a[1].length || a[0].localeCompare(b[0]));

    for (const iterator of arr) {
      console.log(`${iterator[0]}: ${iterator[1].join(', ').trim()}`);
    }

    console.log(`Unliked meals: ${unliked}`);
  }

nikuldenMeals([
  'Like-Krisi-shrimps',
  'Like-Krisi-soup',
  'Like-Misho-salad',
  'Like-Pena-dessert',
  'Stop'
])
