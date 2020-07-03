function solve(input = []) {
  let names = input.shift().split(", ");
  let lost = 0;
  let blacklisted = 0;
  let command;

  while ((command = input.shift()) !== "Report") {
    let curr = command.split(" ");

    switch (curr[0]) {
      case "Blacklist":
        let name = curr[1];
        if (names.indexOf(name) === -1) {
          console.log(`${name} was not found.`);
          break;
        } else {
          for (let i = 0; i < names.length; i++) {
            if (names[i] === name) {
              blacklisted++;
              names[i] = "Blacklisted";
              console.log(`${name} was blacklisted.`);
              break;
            }
          }
        }
        break;
      case "Error":
        let index = +curr[1];
        let n = names[index];
        if (names[index] !== "Blacklisted" && names[index] !== "Lost") {
          names[index] = "Lost";
          lost++;
          console.log(`${n} was lost due to an error.`);
          break;
        }
        break;

      case "Change":
        let i = +curr[1];
        let y = curr[2];

        if (i >= 0 && i < names.length) {
          console.log(`${names[i]} changed his username to ${y}.`);
          names[i] = y;
          break;
        }
    }
  }

  console.log(`Blacklisted names: ${blacklisted} `);
  console.log(`Lost names: ${lost} `);
  console.log(names.join(" "));
}
