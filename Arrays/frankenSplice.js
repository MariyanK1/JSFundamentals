/*
You are given two arrays and an index.

Copy each element of the first array into the second array, in order.

Begin inserting elements at index n of the second array.

Return the resulting array. The input arrays should remain the same after the function runs.
*/


function frankenSplice(arr1, arr2, n) {
    let array = arr1.slice();
    let array2 = arr2.slice();

    array2.splice(n, 0, ...array)

    return array2
}

frankenSplice([1, 2, 3], [4, 5], 1);
