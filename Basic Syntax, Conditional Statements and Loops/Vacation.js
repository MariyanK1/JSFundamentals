/*
You are given a group of people, type of the group, and day of the week they are going to stay. 
Based on that information calculate how much they have to pay and print that price on the console. 
Use the table below. In each cell is the price for a single person. The output should look like that:
 "Total price: {price}". The price should be formatted to the second decimal point.

	        Friday	Saturday	Sunday
Students	8.45	9.80	    10.46
Business	10.90	15.60	    16
Regular	    15      20	        22.50

There are also discounts based on some conditions:
⦁	Students – if the group is bigger than or equal to 30 people you should reduce the total price by 15%
⦁	Business – if the group is bigger than or equal to 100 people 10 of them can stay for free.
⦁	Regular – if the group is bigger than or equal 10 and less than or equal to 20 reduce the total price by 5%

You should reduce the prices in that EXACT order

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
