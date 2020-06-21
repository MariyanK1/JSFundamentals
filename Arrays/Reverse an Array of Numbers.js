function solve(n, inputArr = []) {

    let arr = [];
    let stringy = '';

    for (let i = 0; i < n; i++) {
        arr.push(inputArr[i]);
    }

    for (let i = arr.length - 1; i >= 0; i--) {
        stringy += ` ${arr[i]}`
    }

    console.log(stringy);
}
