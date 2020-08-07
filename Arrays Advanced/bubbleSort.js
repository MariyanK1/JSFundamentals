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
