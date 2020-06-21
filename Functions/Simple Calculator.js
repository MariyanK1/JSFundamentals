function solve(num, num2, operator) {
  switch (operator) {
    case "multiply":
      let mult = (num, num2) => num * num2;
      console.log(mult(num, num2));
      break;
    case "divide":
      let div = (num, num2) => num / num2;
      console.log(div(num, num2));
      break;
    case "add":
      let ad = (num, num2) => num + num2;
      console.log(ad(num, num2));
      break;
    case "subtract":
      let sub = (num, num2) => num - num2;
      console.log(sub(num, num2));
      break;
  }
}
