function solve(input = []) {

    let days = +input.shift();
    let daliyPlunder = +input.shift();
    let goal = +input.shift();
    let result = 0;
    
    for (let i = 1; i <= days; i++) {
        result += daliyPlunder;

        if (i % 3 === 0) {
            result += daliyPlunder * 0.50;
        }
        if (i % 5 === 0) {
            result -= result * 0.30
        }
    }

    if (result >= goal) {
        console.log(`Ahoy! ${result.toFixed(2)} plunder gained.`);
    }

    else {
        console.log(`Collected only ${((result / goal) * 100).toFixed(2)}% of the plunder.`);
    }
}
