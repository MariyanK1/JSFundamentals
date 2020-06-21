/*
You will receive 3 numbers. Your task is to find their sum and print it to the console with the addition 
" - {type of the number (Integer or Float)}"
*/

function solve(firstN, secondN, thirdN) {
  let sum = firstN + secondN + thirdN;
  
  return sum % 1 === 0 ? sum += ' Integer' : sum += ' Float'
}
