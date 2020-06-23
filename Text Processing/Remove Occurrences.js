//Write a function that receives a text and a word to remove all occurrences of it inside the text.

function solve(word, text) {

    let old;

    while (old !== text) {
        old = text;
        text = text.replace(word, '')
    }

    console.log(text);
}

solve('ice', 'icehfice0010gi6lice22b')
