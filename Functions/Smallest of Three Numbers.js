function solve (a, b, c) {
  let min = c;

  if (a <= b && a <= c) {
    min = a;
  } else if (b <= a && b <= c) {
    min = b;
  }

  console.log(min);
}
