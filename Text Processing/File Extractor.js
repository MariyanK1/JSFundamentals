/*
Write a function that receives a single string - the path to a file (the '\' character is escaped)
Your task is to subtract the file name and its extension.
*/

function solve(input) {
    let file = input.substring(input.lastIndexOf('\\') + 1);
    let fileName = file.substring(0, file.lastIndexOf('.'));
    let extension = file.substring(file.lastIndexOf('.') + 1)

    console.log(`File name: ${fileName}`);
    console.log(`File extension: ${extension}`);
}

solve('C:\\Internal\\training-internal\\Template.pptx')
