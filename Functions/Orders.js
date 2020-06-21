function solve(item, quantity) {
  switch (item) {
    case 'coffee':
      let a = quantity * 1.50;
      console.log(a.toFixed(2))
      break;

      case 'water':
        let b = quantity * 1;
        console.log(b.toFixed(2));
    break;
    
    case 'coke':
      let c = quantity * 1.40;
      console.log(c.toFixed(2));
      break;
    default:
      let d = quantity * 2;
      console.log(d.toFixed(2));
      break;
  }
}
