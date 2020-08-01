/*
Check if a string (first argument, string) ends with the given target string (second argument, target).

This challenge can be solved with the .endsWith() method, which was introduced in ES2015.
But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.
*/

function confirmEnding(str, target) {
    str = str.split('').reverse().join('');
    target = target.split('').reverse().join('');
    let result = '';
    for (let i = 0; i < str.length; i++) {
        result += str[i];
        
        if (result === target) {
            return true
        }

        if (i === (str.length) - 1) {
            return false
        }
    }

}

confirmEnding("Abstraction", "action");
