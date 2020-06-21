/*
You will receive three integer numbers. 
Write a function sum() to get the sum of the first two integers and subtract() function that 
subtracts the third integer from the result.

*

/function nums(a, b, c) {
  function sum(a, b) {
    return a + b;
  }
  function subtract(a, b) {
    return a - b;
  }

  let sumResult = sum(a, b);
  let res = subtract(sumResult, c);
  console.log(res);
}
