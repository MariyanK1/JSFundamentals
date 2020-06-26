/*
Write a regular expression to match a valid phone number from Sofia.

After you find all valid phones, print them on the console, separated by a comma and a space ", ".

A valid number has the following characteristics:

⦁	It starts with "+359"
⦁	Then, it is followed by the area code (always 2)
⦁	After that, it’s followed by the number itself:
⦁	The number consists of 7 digits (separated in two groups of 3 and 4 digits respectively). 
⦁	The different parts are separated by either a space or a hyphen ('-').

Sample case:

In:
"+359 2 222 2222,359-2-222-2222, +359/2/222/2222,
+359-2 222 2222 +359 2-222-2222, +359-2-222-222, 
+359-2-222-22222 +359-2-222-2222"

Out:
+359 2 222 2222, +359-2-222-2222
*/

function solve(input) {

    let pattern = /(?<!\d)[+]359([ -])2\1\d{3}\1\d{4}\b/g;

    let validNumbers = [];

    let validNumber = null;

    while ((validNumber = pattern.exec(input)) !== null) {

        validNumbers.push(validNumber[0]);

    }

    console.log(validNumbers.join(', '));

}
