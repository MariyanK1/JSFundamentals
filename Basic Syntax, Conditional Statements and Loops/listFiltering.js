/*
In this problem you will create a function that takes a list of non-negative integers
and strings and returns a new list with the strings filtered out.
*/

function filter_list(arr) {

    let result = [];

    arr
    .sort((a, b) => a - b)
    .filter(val => {
        if (val >= 0 && typeof val !== "string") {
            result.push(val)
        }
    });

    return result;
}

filter_list([1, 2, 'aasf', '1', '123', 123]);
