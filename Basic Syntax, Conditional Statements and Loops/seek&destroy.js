/*
You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments.
Remove all elements from the initial array that are of the same value as these arguments.
*/

function destroyer(...args) {

    let arr = Array.from(args.shift());

    while (args.length > 0) {
        let el = args.shift();

        while (arr.includes(el)) {
            arr.splice(arr.indexOf(el), 1)
        }
    }

    return arr
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
