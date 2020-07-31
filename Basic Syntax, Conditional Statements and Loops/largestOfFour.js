/*

Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.

largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]) //should return [9, 35, 97, 1000000].
*/

function largestOfFour(arr) {
    let newArr = [];
    while (arr.length > 0) {

        let go = arr.shift().sort((a, b) => b - a);
        newArr.push(go[0]);
    }

    return newArr;
}
