function solve(side1, side2, side3) {

    let half = (side1 + side2 + side3) / 2;
    let area = Math.sqrt(half * (half - side1) * (half - side2) * (half - side3));
    console.log(area);
}
