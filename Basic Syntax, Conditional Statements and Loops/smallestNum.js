function smallest(numbers = []) {
    if (numbers.length <= 0) {
        return numbers;
    }

    let workingArr = numbers;
    let minNumber = Math.min(...workingArr);
    workingArr.splice(workingArr.indexOf(minNumber), 1);
    return workingArr
}

smallest([2, 2, 1, 2, 1])

/*
Given an array of integers, remove the smallest value. Do not mutate the original array/list.
If there are multiple elements with the same value, remove the one with a lower index.
If you get an empty array/list, return an empty array/list.
Don't change the order of the elements that are left.

Example:
Input:
[2,2,1,2,1]

Output:
[2,2,2,1]
*/
