function translatePigLatin(str = '') {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l',
        'm', 'n', 'p', 'q', 's', 's', 't', 'v', 'w', 'y', 'x', 'z'];

    let arr = str.split('');
    let startLetter = arr[0];

    if (vowels.includes(startLetter)) {
        return arr.join('').concat('way');
    } else {
        let concat = arr.shift().concat('ay');
        arr.push(concat)
        return arr.join('')
    }

}

translatePigLatin("rhythm");


/*
Pig Latin is a way of altering English Words. The rules are as follows:

- If a word begins with a consonant, take the first consonant,
move it to the end of the word, and add "ay" to it.

- If a word begins with a vowel, just add "way" at the end.

Translate the provided string to Pig Latin.
Input strings are guaranteed to be English words in all lowercase.
*/
