/*
Write a function to calculate the total cost of different types of furniture. You will be given some lines of input until you receive the line "Purchase".
For the line to be valid it should be in the following format:
">>{furniture name}<<{price}!{quantity}"
The price can be floating point number or whole number. Store the names of the furniture and the total price. 

At the end print the each bought furniture on separate line in the format:
"Bought furniture:
{1st name}
{2nd name}
…"

And on the last line print the following: "Total money spend: {spend money}" formatted to the second decimal point.

*/

function furniture(input = []) {
    const pattern = />>([a-zA-Z]+)<<(\d+\.?\d+)!(\d+)/gm;
    let lines = input
        .slice(0, input.indexOf('Purchase'))
        .join('\n');

    let resultArr = Array.from(lines.matchAll(pattern));
    let final = `Bought furniture:`
    let cost = 0;

    resultArr.forEach(match => {
        final += '\n' + match[1];
        cost += Number(match[2]) * Number(match[3])
    })

    console.log(`${final}\nTotal money spend: ${cost.toFixed(2)}`);
}

furniture(['>>Sofa<<312.23!3', '>>TV<<300!5', '>Invalid<<!5', 'Purchase'])
