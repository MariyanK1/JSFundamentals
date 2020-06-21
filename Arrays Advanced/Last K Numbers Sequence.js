/*
You are given two integers n and k. Write a function that generates and prints the following sequence:
⦁	The first element is 1.
⦁	Every following element equals the sum of the previous k elements.
⦁	The length of the sequence is n elements.
	
The input comes as two number arguments. The first element represents the number n, and the second – the number k.
The output is printed on the console on a single line, separated by space.

Sample case:

In:
6, 3

Out:
1 1 2 4 7 13

*/
function solve(length, k) {
    let outputArr = [1];
    for (let i = 1; i < length; i++) {
        outputArr[i] = sumLastK(outputArr, k);
    }
    console.log(outputArr.join(' '));

    function sumLastK(arr, k) {
        k = arr.length > k ? k : arr.length;
        let sum = 0;
        for (let i = 1; i <= k; i++) {
            sum += arr[arr.length - i];
        }
        return sum;
    }
}

solve(6, 3)
