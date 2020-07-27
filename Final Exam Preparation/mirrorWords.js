/*
On the first line of the input you will be given a text string.
In order to win the competition you have to find all hidden word pairs, read them and mark the ones that are mirror images of each other.
First of all you have to extract the hidden word pairs.

Hidden word pairs are:
Surrounded by "@" or "#" (only one of the two) in the following pattern #wordOne##wordTwo# or @wordOne@@wordTwo@
At least 3 characters long each (without the surrounding symbols)
Made up of letters only
If the second word, spelled backwards is the same as the first word and vice versa (casing matters!), then they are a match and you have to store them somewhere. 

Examples of mirror words: 
#Part##traP# @leveL@@Level@ #sAw##wAs#
If you don`t find any valid pairs print: "No word pairs found!"

If you find valid pairs print their count: "{valid pairs count} word pairs found!"

If there are no mirror words print: "No mirror words!"

If there are mirror words print:
"The mirror words are:
{wordOne} <=> {wordtwo}, {wordOne} <=> {wordtwo}, {wordOne} <=> {wordtwo}, etc…"

Input / Constraints
You will recive a string.

Output
Print the proper output messages in the proper cases as described in the problem description.
If there are pairs of mirror words, print them in the end, each pair separated by ", ".
Each pair of mirror word must be printed with " <=> " between the words.

Examples

Input
@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r	

Output
5 word pairs found!
The mirror words are:
Part <=> traP, leveL <=> Level, sAw <=> wAs	

There are 5 green and yellow pairs that meet all requirements and thus are valid. 
#poOl##loOp# is valid and looks very much like a mirror words pair but it isn`t because the casings don`t match.
#car#rac# “rac” spelled backwards is "car" but this is not a valid pair because there is only one "#" between the words.
@pack@@ckap@ is also valid but "ckap" backwards is "pakc" which is not the same as "pack", so they are not mirror words.


*/



function mirrorWords(input) {
    let pattern = /(@|#)(?<first>[A-Za-z]{3,})\1\1(?<second>[A-Za-z]{3,})\1/gm;
    let matches = [...input.shift().matchAll(pattern)]
    let mirrors = [];
    for (const match of matches) {
        let fistWord = match[2];
        let secondWord = match[3];
        let reversed = secondWord.split('').reverse().join('');

        if (fistWord === reversed) {
            mirrors.push(fistWord + ' <=> ' + secondWord);
        }
    }

    if (matches.length <= 0) {
        console.log('No word pairs found!')
        console.log('No mirror words!')
    } else {
        console.log(`${matches.length} word pairs found!`);
        if (mirrors.length <= 0) {
            console.log(`No mirror words!`);
        } else {
            console.log(`The mirror words are:`);
            console.log(mirrors.join(', '));
        }
    }
}
mirrorWords('@mix#tix3dj#poOl##loOp#wl@@bong&song%4very$long@thong#Part##traP##@@leveL@@Level@##car#rac##tu@pack@@ckap@#rr#sAw##wAs#r#@w1r')
