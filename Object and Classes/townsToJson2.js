/*
You're tasked to create and print a JSON from a text table. You will receive input as an array of strings,
where each string represents a row of a table, with values on the row encompassed by pipes "|" and optionally spaces.
The table will consist of exactly 3 columns "Town", "Latitude" and "Longitude".
The latitude and longitude columns will always contain valid numbers. Check the examples to get a better understanding of your task.

Input
The input comes as an array of strings – the first string contains the table’s headings, each next string is a row from the table.

Output
The output should be an array of objects wrapped in JSON.stringify(). 
Latitude and longitude must be parsed to numbers, and represented till the second digit after the decimal point!

Sample Case:
In:
['| Town | Latitude | Longitude |',
'| Sofia | 42.696552 | 23.32601 |',
'| Beijing | 39.913818 | 116.363625 |']

Out:
[{"Town":"Sofia",
  "Latitude":42.7,
  "Longitude":23.32
},
{"Town":"Beijing", 
 "Latitude":39.91, 
 "Longitude":116.36
}]

*/

function townsToJSON(input) {
    let towns = [];
    let regex = /\s*\|\s*/;
    for (let line of input.splice(1)) {
        let tokens = line.split(regex);
        let Latitude = Number(tokens[2]).toFixed(2)
        let Longitude = Number(tokens[3]).toFixed(2)
        let townObj = { Town: tokens[1], Latitude: Number(Latitude), Longitude: Number(Longitude) };
        towns.push(townObj)
    }

    console.log(JSON.stringify(towns));
}
townsToJSON(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |'])
