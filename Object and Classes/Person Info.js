function solve(firstName, lastName, age) {
  let obj = {firstName : firstName, lastName : lastName, age : age};

  for (let key in obj) {
    console.log(`${key}: ${obj[key]}`);
  }
}
