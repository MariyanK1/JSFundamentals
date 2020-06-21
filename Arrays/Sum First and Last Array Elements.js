function solve(input = []) {
    input = input.map(x => Number(x));

    let first = input.shift();
    let last = input.pop();

    console.log(first + last);
}
