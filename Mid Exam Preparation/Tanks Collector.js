function solve(input = []) {
  let garage = input.shift().split(", ");
  let numOfCommands = +input.shift();

  for (let i = 1; i <= numOfCommands; i++) {
    let command = input.shift().split(", ");

    switch (command[0]) {
      case "Add":
        let name = command[1];
        if (garage.indexOf(name) === -1) {
          garage.push(name);
          console.log(`Tank successfully bought`);
        } else {
          console.log(`Tank is already bought`);
        }
        break;

      case "Remove":
        let n4me = command[1];
        if (garage.indexOf(n4me) === -1) {
          console.log(`Tank not found`);
        } else {
          let index = garage.indexOf(n4me);
          garage.splice(index, 1);
          console.log(`Tank successfully sold`);
        }
        break;

      case "Remove At":
        let i = +command[1];

        if (i >= 0 && i < garage.length) {
          garage.splice(i, 1);
          console.log(`Tank successfully sold`);
        } else {
          console.log(`Index out of range`);
        }
        break;

      case "Insert":
        let index = +command[1];
        let n = command[2];
        if (index < 0 || index > garage.length) {
          console.log(`Index out of range`);
        } else if (garage.indexOf(n) >= 0) {
          console.log(`Tank is already bought`);
        } else {
          garage.splice(index, 0, n);
          console.log(`Tank successfully bought`);
        }
        break;
    }
  }

  console.log(garage.join(", "));
}
