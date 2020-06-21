function solve(radius, height) {

    let surfaceArea = Math.PI * radius * (radius + Math.sqrt(height * height + radius * radius));
    let volume = Math.PI * radius * radius * (height / 3)
    console.log(`volume = ${volume.toFixed(4)}`);
    console.log(`area = ${surfaceArea.toFixed(4)}`);
}
