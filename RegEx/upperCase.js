/*
Write a program that extracts all words from a passed in string and converts them to upper case.
Theextracted words in upper case must be printed on a single line separated by ",".
The input comes as a single string argument - the text to extract and convert words from.
The output should be a single line containing the converted string.
*/



function upper(text) {

    let result = text.toUpperCase()
        .split(/[\W]+/)
        .filter(w => w.length > 0)
        .join(", ");

    console.log(result);
}x
