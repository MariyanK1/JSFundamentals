function solve(num, power) {
  let pow = 1;
  for (let i = 0; i < power; i++) {
    pow = num * pow;
  }
  console.log(pow);
}
