/*
Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

*/


function uniteUnique(...arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        const array = arr[i];

        for (let j = 0; j < array.length; j++) {
            const element = array[j];
            
            if (!newArr.includes(element)) {
                newArr.push(element);
            }
        }
    }

    return newArr;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

//uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]) should return [1, 2, 3, 5, 4, 6, 7, 8]
