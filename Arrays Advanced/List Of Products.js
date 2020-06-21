//You will receive an array of products. 
//Print a numbered array of all the products ordered by name.

function solve(array = []) {
    let sorted = array.sort()
    let n = 0;
    for (let i = 0; i < sorted.length; i++) {
        n++;
        console.log(`${n}.${sorted[i]}`);
    }
}
