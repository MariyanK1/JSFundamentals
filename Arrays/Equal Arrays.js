function solve(arr1, arr2) {
    let sum = 0;
    
    for (let i in arr1) {
        let firstEl = arr1[i];
        let secondEl = arr2[i];
        if (firstEl !== secondEl) {
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            return;
        }

        sum += +firstEl;
    }

    console.log(`Arrays are identical. Sum: ${sum}`);
}
