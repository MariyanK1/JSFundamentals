function solve(a, b) {
  for (let i = 0; i < a.length - 1; i++) {
    for (let j = i + 1; j < a.length; j++) {
      if (Number(a[i]) + Number(a[j]) === Number(b)) {
        console.log(a[i] + ` ` + a[j]);
      }
    }
  }
}

//Write a function, which prints all unique pairs in an array of integers whose sum is equal to a given number. 
