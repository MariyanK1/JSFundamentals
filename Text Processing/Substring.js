//Write a function that receives a string and two numbers. 
//The numbers will be a starting index and count of elements to substring.

function solve(text = String, startIndex, count) {
    let substring = text.substr(startIndex, count);

    console.log(substring);
}

solve("ASentence", 1, 8)
