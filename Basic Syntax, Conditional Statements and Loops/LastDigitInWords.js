/*
English Name of the Last Digit	
Write a function that returns the English name of the last digit of a given number. 
Write a program that receives a number and prints the returned value from this function.

*/

function solve(num) {
 
    let lastDigit = num % 10;
 
    if (lastDigit < 0) {
        lastDigit = Math.abs(lastDigit);
    }
 
    let englishName = '';
 
    switch (lastDigit) {
        case 0:
            englishName = 'zero';
            break;
 
        case 1:
            englishName = 'one';
            break;
 
        case 2:
            englishName = 'two';
            break;
 
        case 3:
            englishName = 'three';
            break;
 
        case 4:
            englishName = 'four';
            break;
 
        case 5:
            englishName = 'five';
            break;
 
        case 6:
            englishName = 'six';
            break;
 
        case 7:
            englishName = 'seven';
 
        case 8:
            englishName = 'eigth';
            break;
 
        case 9:
            englishName = 'nine';
            break;
    }
 
    console.log(englishName);
}
