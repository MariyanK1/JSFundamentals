//You will receive an array of products. 
//Print a numbered array of all the products ordered by name.

function solve(array = []) {
    let sorted = array.sort()
    for (let i = 0; i < sorted.length; i++) {
        console.log(`${i+1}.${sorted[i]}`);
    }
}
