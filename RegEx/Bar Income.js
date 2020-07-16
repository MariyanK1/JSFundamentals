/*
It is about time for the people behind the bar to go home and you are the person who has 
to draw the line and calculate the money from the products that were sold throughout the day.
Until you receive a line with text "end of shift" you will be given lines of input. 
But before processing that line you have to do some validations first.

Each valid order should have a customer, product, count and a price:
Valid customer's name should be surrounded by '%' and must start with a capital letter, followed by lower-case letters
Valid product contains any word character and must be surrounded by '<' and '>' 
Valid count is an integer, surrounded by '|'
Valid price is any real number followed by '$'

The parts of a valid order should appear in the order given: customer, product, count and a price.
Between each part there can be other symbols, except ('|', '$', '%' and '.')

For each valid line print on the console: "{customerName}: {product} - {totalPrice}"
When you receive "end of shift" print the total amount of money for the day rounded to 2 decimal places in the following format:
"Total income: {income}".

Input / Constraints
Strings that you have to process until you receive text "end of shift".

Output
Print all of the valid lines in the format "{customerName}: {product} - {totalPrice}"
After receiving "end of shift" print the total amount of money for the day rounded 
to 2 decimal places in the following format: "Total income: {income}"
Allowed working time / memory: 100ms / 16MB.

Sample Case:

In:
%InvalidName%<Croissant>|2|10.3$
%Peter%<Gum>1.3$
%Maria%<Cola>|1|2.4
%Valid%<Valid>valid|10|valid20$
end of shift

Out:
Valid: Valid - 200.00
Total income: 200.00
*/


function barIncome(input = []) {
    let pattern =
    /^%(?<customer>[A-Z][a-z]+)%[^|$%.]*<(?<product>\w+)>[^|$%.]*\|(?<count>\d+)\|[^|$%.]*?(?<price>[-+]?[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?)\$/;
    
    input = input.slice(0, input.indexOf('end of shift'));
    let sum = 0;

    while (input.length > 0) {
        let line = input.shift();
        let match = pattern.exec(line);

        if (match !== null) {
            let totalPrice = Number(match[3]) * Number(match[4]);
            sum += totalPrice;
            console.log(`${match[1]}: ${match[2]} - ${totalPrice.toFixed(2)}`);
        }
    }
    console.log(`Total income: ${sum.toFixed(2)}`);
}

barIncome([
    '%George%<Croissant>|2|10.3$',
    '%Peter%<Gum>|1|1.3$',
    '%Maria%<Cola>|1|2.4$',
    'end of shift'
])
