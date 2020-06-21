/*
Write a program, which prints all the numbers from 1 to 100, which are divisible by 3. 
You have to use a single for loop. The program should not receive input.
*/

function tralala (input) {

    for (let index = 1; index <= 100; index++) {
        
        if (index % 3 === 0) {
            console.log(index);
        }
    }
}
