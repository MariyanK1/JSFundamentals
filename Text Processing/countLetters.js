/*
you've to count lowercase letters in a given string and return the letter count in a hash with 'letter' as key and count as 'value'.
Example:
letter_count('arithmetics') //=> {"a": 1, "c": 1, "e": 1, "h": 1, "i": 2, "m": 1, "r": 1, "s": 1, "t": 2}

*/


function letterCount(s) {
    let obj = {};

    s = s.split('').map(letter => {
        obj.hasOwnProperty(letter)
            ? obj[letter]++
            : obj[letter] = 1;
    });

    let arr = Object.entries(obj).sort((a, b) => a[0].localeCompare(b[0]));

    let resultObj = {};

    for (const letter of arr) {
        let key = letter[0];
        let value = letter[1];

        if (!resultObj.hasOwnProperty(key)) {
            resultObj[key] = value;
        }
        
    }

    return resultObj
}

letterCount("arithmetics");
