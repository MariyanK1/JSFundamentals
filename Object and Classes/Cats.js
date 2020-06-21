/*
Write a function that receives array of strings in the following format '{cat name} {age}'.
Create a Cat class that receives in the constructor the name and the age parsed from the input. 
It should also have a function named "meow" that will print "{cat name}, age {age} says Meow" on the console.
For each of the strings provided you must create a cat object.
*/

function solve(arr = []) {

class Cat {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  meow() {
    console.log(`${this.name}, age ${this.age} says Meow`);
  }
}

  for (let i = 0; i < arr.length; i++) {
    let catData = arr[i].split(" ");
    let name, age;
    [name, age] = [catData[0], catData[1]];
    let cat = new Cat(name, age);

    cat.meow();
  }
}
