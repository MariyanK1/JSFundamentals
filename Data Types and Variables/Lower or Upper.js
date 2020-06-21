function solve(a) {
    let char = a.charCodeAt(a)
    if (char >= 65 && char <= 90) {
        console.log(`upper-case`);
    }

    else if (char >= 97 && char <= 122) {
        console.log(`lower-case`);
    }
}
