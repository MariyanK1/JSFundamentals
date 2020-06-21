/*
You will be given a number and you have to return whether that number is divisible by the following numbers: 2, 3, 6, 7, and 10.
You should always take the bigger division. If the number is divisible by both 2 and 3 it is also divisible by 6 
and you should print only the division by 6. If a number is divisible by 2 it is sometimes also divisible by 10 
and you should print the division by 10. If the number is not divisible by any of the 
given numbers print "Not divisible". Otherwise print "The number is divisible by {number}".
*/

function solve(num, students, day) {

    let totalPrice = 0;

    switch (day) {
        case 'Friday':
            if (students === 'Students') {
                totalPrice += num * 8.45;

                if (num >= 30) {
                    totalPrice -= totalPrice * 0.15;
                }
            }

            else if (students === 'Business') {
                if (num >= 100) {
                    num -= 10;
                }
                totalPrice += num * 10.90;    
            }

            else if (students === 'Regular') {
                totalPrice += num * 15;

                if (num >= 10 && num <= 20) {
                    totalPrice -= totalPrice * 0.05;
                }
            }
            break;

        case 'Saturday':
            if (students === 'Students') {
                totalPrice += num * 9.80;
                if (num >= 30) {
                    totalPrice -= totalPrice * 0.15;
                }
            }

            else if (students === 'Business') {
                if (num >= 100) {
                    num -= 10;
                }
                totalPrice += num * 15.60;
            }

            else if (students === 'Regular') {
                totalPrice += num * 20;

                if (num >= 10 && num <= 20) {
                    totalPrice -= totalPrice * 0.05;
                }
            }
            break;

        default:
            if (students === 'Students') {
                totalPrice += num * 10.46;
                if (num >= 30) {
                    totalPrice -= totalPrice * 0.15;
                }
            }

            else if (students === 'Business') {
                if (num >= 100) {
                    num -= 10;
                }
                totalPrice += num * 16;
            }

            else if (students === 'Regular') {
                totalPrice += num * 22.50;
                if (num >= 10 && num <= 20) {
                    totalPrice -= totalPrice * 0.05;
                }
            }
            break;
    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}
