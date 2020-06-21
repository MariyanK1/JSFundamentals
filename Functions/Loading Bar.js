function solve(input) {
  function zero(value) {
    console.log(`${value}% [..........]`);
    console.log(`Still loading...`);
  }
  function one(value) {
    console.log(`${value}% [%.........]`);
    console.log(`Still loading...`);
  }
  function two(value) {
    console.log(`${value}% [%%........]`);
    console.log(`Still loading...`);
  }
  function three(value) {
    console.log(`${value}% [%%%.......]`);
    console.log(`Still loading...`);
  }
  function four(value) {
    console.log(`${value}% [%%%%......]`);
    console.log(`Still loading...`);
  }
  function five(value) {
    console.log(`${value}% [%%%%%.....]`);
    console.log(`Still loading...`);
  }
  function six(value) {
    console.log(`${value}% [%%%%%%....]`);
    console.log(`Still loading...`);
  }

  function seven(value) {
    console.log(`${value}% [%%%%%%%...]`);
    console.log(`Still loading...`);
  }
  function eight(value) {
    console.log(`${value}% [%%%%%%%%..]`);
    console.log(`Still loading...`);
  }
  function nine(value) {
    console.log(`${value}% [%%%%%%%%%.]`);
    console.log(`Still loading...`);
  }
  function ten(value) {
    console.log(`${value}% Complete!`);
    console.log(`[%%%%%%%%%%]`);
  }

  switch (input) {
    case 0:
      zero(input);
      break;
    case 10:
      one(input);
      break;
    case 20:
      two(input);
      break;
    case 30:
      three(input);
      break;

    case 40:
      four(input);
      break;
    case 50:
      five(input);
      break;
    case 60:
      six(input);
      break;
    case 70:
      seven(input);
      break;
    case 80:
      eight(input);
      break;
    case 90:
      nine(input);
      break;
    case 100:
      ten(input);
      break;
  }
}
