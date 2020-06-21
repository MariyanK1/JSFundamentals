function solve(name, area, population, country, postCode) {
  let obj = {
    name: name,
    area: area,
    population: population,
    country: country,
    postCode: postCode,
  };

  for (let key in obj) {
    console.log(`${key} -> ${obj[key]}`);
  }
}
