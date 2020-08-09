/*
You are a world traveller and your next goal is to make a world tour. In order to do that, you have to plan out everything first.
To start with, you would like to plan out all of your stops where you will have a break.
On the first line you will be given a string containing all of your stops.
Until you receive the command "Travel", you will be given some commands to manipulate that initial string.

The commands can be:
Add Stop:{index}:{string} – insert the given string at that index only if the index is valid

Remove Stop:{start_index}:{end_index} – remove the elements of the string from the starting index to the end index (inclusive) if both indices are valid

Switch:{old_string}:{new_string} – if the old string is in the initial string, replace it with the new one. (all occurrences)
Note: After each command print the current state of the string

After the "Travel" command, print the following: "Ready for world tour! Planned stops: {string}"

Input / Constraints
JavaScript: you will receive a list of strings

Output
Print the proper output messages in the proper cases as described in the problem description

Examples
Input:
Hawai::Cyprys-Greece
Add Stop:7:Rome
Remove Stop:11:16
Switch:Hawai:Bulgaria
Travel	

Output:
Hawai::RomeCyprys-Greece
Hawai::Rome-Greece
Bulgaria::Rome-Greece
Ready for world tour! Planned stops: Bulgaria::Rome-Greece

*/


function worldTour(input = []) {
    let betterInput = input.splice(0, input.indexOf('Travel'));
    let stops = betterInput.shift();

    for (const line of betterInput) {
        let [command, value1, value2] = line.split(':');

        switch (command) {
            case 'Switch':
                while (stops.includes(value1)) {
                    stops = stops.replace(value1, value2);
                }
                
                console.log(stops);
                break;

            case 'Add Stop':
                let index = +value1;
                let string = value2;

                if (index < stops.length && index >= 0) {
                    let split = stops.slice(0, index).concat(string);
                    let split2 = stops.slice(index, stops.length);
                    stops = split + split2;
                }

                console.log(stops);
                break;

            default:
                let startIndex = +value1;
                let endIndex = +value2;

                if (startIndex < stops.length && startIndex >= 0
                    && endIndex < stops.length && endIndex >= 0) {
                    let split = stops.substring(startIndex, endIndex + 1);
                    stops = stops.replace(split, '');
                }

                console.log(stops);
                break;
        }
    }

    console.log(`Ready for world tour! Planned stops: ${stops}`);
}
