/*
In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
*/

function highAndLow(numbers) {
    numbers = numbers.split(' ').map(Number);

    let min = Math.min(...numbers);
    let max = Math.max(...numbers);
    let arr = [max, min]
    return arr.join(' ')

}
