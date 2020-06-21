/*
You will be given a string representing a username. The password will be that username reversed. 
Until you receive the correct password print on the console "Incorrect password. Try again.". 
When you receive the correct password print "User {username} logged in." 
However on the fourth try if the password is still not correct print "User {username} blocked!" and end the program. 
The input comes as an array of strings.
*/

function solve(input = []) {
  let username = input.shift();
  let reverserName = "";
  let count = 0;
  for (let i = username.length - 1; i >= 0; i--) {
    reverserName += username[i];
  }

  for (let times of input) {
    if (times === reverserName) {
      console.log(`User ${username} logged in.`);
    } else if (count === 3) {
      console.log(`User ${username} blocked!`);
      return;
    } else if (times !== reverserName) {
      console.log(`Incorrect password. Try again.`);
      count++;
    }
  }
}
