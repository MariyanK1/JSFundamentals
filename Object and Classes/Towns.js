/*
You’re tasked to create and print objects from a text table. 
You will receive input as an array of strings, where each string represents a row of a table, with values on the 
row separated by pipes "|" and spaces.

The table will consist of exactly 3 columns "Town", "Latitude" and "Longitude". 
The latitude and longitude columns will always contain valid numbers. Check the examples to get a better 
understanding of your task.

The output should be objects. Latitude and longitude must be parsed to numbers and formatted to the second decimal point!

*/

function towns(array = []) {
  class Town {
    constructor(name, latitude, longitude) {
      this.name = name;
      this.latitude = latitude;
      this.longitude = longitude;
    }
  }
  for (let i = 0; i < array.length; i++) {
    let arr = array[i].split(" | ");
    let name = arr[0];
    let latitude = +arr[1];
    let longitude = +arr[2];
    town = new Town(name, latitude, longitude);
    console.log(
      `{ town: '${town.name}', latitude: '${latitude.toFixed(
        2
      )}', longitude: '${longitude.toFixed(2)}' }`
    );
  }
}

solve(['Sofia | 42.696552 | 23.32601',
'Beijing | 39.913818 | 116.363625'])
