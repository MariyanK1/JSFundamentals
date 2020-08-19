/*
Bubble sort, sometimes referred to as sinking sort, is a simple sorting algorithm that repeatedly steps through the list,
compares adjacent elements and swaps them if they are in the wrong order.
The pass through the list is repeated until the list is sorted. The algorithm, which is a comparison sort,
is named for the way smaller or larger elements "bubble" to the top of the list.
*/

function bubbleSort(nums) {
 do {
     var swapped = false;
     for (let i = 0; i < nums.length; i++) {
        
        if (nums[i] > nums[i + 1]) {
            let temp = nums[i];
            nums[i] = nums[i + 1];
            nums[i + 1] = temp;
            swapped = true;
        }
     }
 } while(swapped);

 return nums;
}

bubbleSort([1, 5, 7, 0, 8, 9])
