function solve(num, num2) {
  function factorial(number) {
    let res = 1;

    for (let i = 1; i <= number; i++) {
      res *= i;
    }
    return res;
  }

  let result = factorial(num);
  let result2 = factorial(num2);

  let final = result / result2;
  console.log(final.toFixed(2));
}
