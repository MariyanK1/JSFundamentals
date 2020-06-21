function solve(inputArr = []) {

    for (let i = 0; i < inputArr.length / 2; i++) {
        let oldEl = inputArr[i];
        let previousIndex = inputArr.length - 1 - i;
        inputArr[i] = inputArr[previousIndex];
        inputArr[previousIndex] = oldEl;
    }

    console.log(inputArr.join(' '));
    
}
