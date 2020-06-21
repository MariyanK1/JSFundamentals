/*
A palindrome is a number which reads the same backward as forward, such as 323 or 1001. 
Write a function which receives an array of positive integer and checks if each integer is a palindrome or not.

*/
function solve(input) {
  function isPalindrome(text) {
    let len = text.length;
    let isPalindromeVal = true;
    for (let i = 0; i < Math.floor(len / 2); i++) {
      if (text[i] !== text[len - 1 - i]) {
        isPalindromeVal = false;
        break;
      }
    }
    return isPalindromeVal;
  }

  for (let num of input) {
    console.log(isPalindrome(num.toString()));
  }
}
