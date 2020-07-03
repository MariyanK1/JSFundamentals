function solve(input) {
    let sizeOfSide = +input.shift();
    let numOfSheets = +input.shift();
    let areOfSheet = +input.shift();

    let totalsize = sizeOfSide * sizeOfSide * 6;
    let covered = 0;

    for (let i = 1; i <= numOfSheets; i++) {
        
        if (i % 3 === 0) {
            covered += areOfSheet * 0.25;
        }

        else {
            covered += areOfSheet;
        }
    }
    let percent = covered / totalsize * 100;
    console.log(`You can cover ${percent.toFixed(2)}% of the box.`);
}
