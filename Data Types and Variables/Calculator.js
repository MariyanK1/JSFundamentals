function solve(a, b, c) {
    let sum = 0;
    if (b === '+') {
        sum = a + c;
    } else if (b === '-') {
        sum = a - c;
    } else if (b === '*') {
        sum = a * c;
    } else if (b === '/') {
        sum = a / c
    }

    console.log(sum.toFixed(2));
}
