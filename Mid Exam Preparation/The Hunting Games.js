function solve(input = []) {
  let go = input.map(Number);
  let days = go.shift();
  let playersNum = go.shift();
  let groupsEnergy = go.shift();
  let waterPerDayPerson = go.shift();
  let foodPerDayPerson = go.shift();

  let totalWater = days * playersNum * waterPerDayPerson;
  let totalFood = days * playersNum * foodPerDayPerson;

  for (let i = 1; i <= days; i++) {
    let burnedEnergy = +go.shift();
    if (groupsEnergy - burnedEnergy > 0) {
      groupsEnergy -= burnedEnergy;
    } else {
      console.log(
        `You will run out of energy. You will be left with ${totalFood.toFixed(
          2
        )} food and ${totalWater.toFixed(2)} water.`
      );
      return;
    }

    if (i % 2 === 0) {
      let boost = groupsEnergy * 0.05;
      groupsEnergy += boost;

      let drop = totalWater * 0.3;
      totalWater -= drop;
    }
    if (i % 3 === 0) {
      let reduce = totalFood / playersNum;
      totalFood -= reduce;
      groupsEnergy *= 1.1;
    }
  }

  console.log(
    `You are ready for the quest. You will be left with - ${groupsEnergy.toFixed(
      2
    )} energy!`
  );
}
