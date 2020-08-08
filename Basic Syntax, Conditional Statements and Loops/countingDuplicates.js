/*
Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string.
The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice

*/

const duplicateCount = (string) => {
    string = string.toLowerCase();
    
    let obj = {};
    
    for (let i = 0; i < string.length; i++) {
        if (obj.hasOwnProperty(string[i])) {
            obj[string[i]]++;
        } else {
            obj[string[i]] = 0;
        }
    }
    let arr = Object.entries(obj).sort((a, b) => b[1] - a[1]);
    
    let count = 0;
    for (const array of arr) {
        if (array[1] > 0) {
            count++;
        }
    }

    return count;
}

dublicateCount('Indivisibilities')
