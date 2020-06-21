/*
Write a function that checks if a given password is valid. Password validations are:

The length should be 6 - 10 characters (inclusive)
It should consists only of letters and digits
It should have at least 2 digits 


If a password is valid print "Password is valid".
If it is NOT valid, for every unfulfilled rule print a message:
"Password must be between 6 and 10 characters"
"Password must consist only of letters and digits"
"Password must have at least 2 digits"

*/

function passwordValidator(password) {
  function isValidLength(passLength) {
    let isValid = true;

    if (passLength < 6 || passLength > 10) {
      isValid = false;
    }

    return isValid;
  }
  function betweenRange(ch, start, end) {
    return (
      ch.charCodeAt(0) >= start.charCodeAt(0) &&
      ch.charCodeAt(0) <= end.charCodeAt(0)
    );
  }

  function containsLettersDigits(password) {
    let isValid = true;
    for (let ch of password) {
      if (
        !(
          betweenRange(ch, "A", "Z") ||
          betweenRange(ch, "a", "z") ||
          betweenRange(ch, "0", "9")
        )
      ) {
        isValid = false;
      }
    }
    return isValid;
  }

  function containsNumbers(password) {
    let counter = 0;
    for (let ch of password) {
      if (betweenRange(ch, "0", "9")) {
        counter++;
        if (counter === 2) {
          break;
        }
      }
    }

    return counter === 2 ? true : false;
  }

  let validPw = isValidLength(password.length);
  if (!validPw) {
    console.log("Password must be between 6 and 10 characters");
  }

  let containsLettersDigitsVal = containsLettersDigits(password);
  if (!containsLettersDigitsVal) {
    console.log("Password must consist only of letters and digits");
  }

  let containsNumbersVal = containsNumbers(password);
  if (!containsNumbersVal) {
    console.log("Password must have at least 2 digits");
  }

  if (containsNumbersVal && containsNumbersVal && containsLettersDigitsVal) {
    console.log("Password is valid");
  }
}
