/*
The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

What if the string is empty? Then the result should be empty object literal, {}.
*/

function count(string) {
    let obj = {}
    if (string.length <= 0) {
        return {};
    }
    string = string.split('');

    for (let k = 0; k < string.length; k++) {
        let el = string[k];

        obj.hasOwnProperty(el)
            ? obj[el]++
            : obj[el] = 1;

    }
    return obj;
}
