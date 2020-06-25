function solve(input = []) {
  let fire = input.shift().split("#");
  let water = +input.shift();
  let effort = 0;
  let sumFire = 0;
  console.log(`Cells:`);
  
  
  while (fire.length > 0) {
    let cells = fire.shift().split(" = ");
    let command = cells[0];
    let value = +cells[1];
  
  if (command === "High" && value >= 81 && value <= 125) {
      water -= value;
      if (water < 0) {
        break;
      }
      effort += value * 0.25;
      sumFire += value;
      console.log(` - ${value}`);
    } else if (command === "Medium" && value >= 51 && value <= 80) {
      water -= value;
      if (water < 0) {
        break;
      }
      effort += value * 0.25;
      sumFire += value;
      console.log(` - ${value}`);
    } else if (command === "Low" && value >= 1 && value <= 50) {
      water -= value;
      if (water < 0) {
        break;
      }
      effort += value * 0.25;
      sumFire += value;
      console.log(` - ${value}`);
    }
  }

  console.log(`Effort: ${effort.toFixed(2)}`);
  console.log(`Total Fire: ${sumFire}`);
}
