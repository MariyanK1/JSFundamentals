/*Your task is to write program which extracts emojis from a text and find the threshold based on the input.
You have to get your cool threshold. It is obtained by multiplying all the digits found in the input.The cool threshold could be a very big number, so be mindful.

An emoji is valid when:
Is surrounded by either :: or ** (exactly 2)
Is at least 3 characters long (without the surrounding symbols)
Starts with a capital letter
Continues with lowercase letters only

Examples of valid emojis: ::Joy::, **Banana**, ::Wink::
Examples of invalid emojis: ::Joy**, ::fox:es:, **Monk3ys**, :Snak::Es::

You need to count all valid emojis in the text and calculate their coolness.
The coolness of the emoji is determined by summing all the ASCII values of all letters in the emoji. 

Examples: ::Joy:: - 306, **Banana** - 577, ::Wink:: - 409

You need to print the result of cool threshold and after that to take all emojis out of the text,
count them and print the only the cool ones on the console. 

Input
On the single input you will receive a piece of string. 

Output
On the first line of the output print the obtained Cool threshold in format:
Cool threshold: {coolThresholdSum}
On the next line print the count of all emojis found in the text in format:
{countOfAllEmojis} emojis found in the text. The cool ones are:
{cool emoji 1}
{cool emoji 2}
{…}
If there are no cool ones, just don't print anything in the end.

Constraints
There will always be at least one digit in the text!

Examples
Input:
In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and
21 different types of :Snak::Es::. ::Mooning:: **Shy**	Cool threshold: 540

Output:
4 emojis found in the text. The cool ones are:
::Smiley:: 
**Tigers** 
::Mooning::
*/
function emoji(input = '') {
    input = input.shift()

    let coolThreshold = input.match(/(\d+)/gm).join('').split('').map(Number).reduce((a, b) => a * b);
    console.log(`Cool threshold: ${coolThreshold}`);

    let emojisPattern = /(?<name>([*]{2})[A-Z][a-z]{2,}([*]{2})|([:]{2})[A-Z][a-z]{2,}([:]{2}))/g;

    let matches = input.match(emojisPattern);

    console.log(`${matches.length} emojis found in the text. The cool ones are:`);


    for (const match of matches) {
        if (match.includes("::")) {
            let splitted = match.split('::');
            let emoji = splitted[1]
            let sum = 0;

            for (let i = 0; i < emoji.length; i++) {
                sum += emoji.charCodeAt(i);
            }

            if (sum > coolThreshold) {
                console.log(match);
            }


        } else {
            let splitted = match.split("**");
            let emoji = splitted[1];
            let sum = 0;

            for (let i = 0; i < emoji.length; i++) {
                sum += emoji.charCodeAt(i);
            }

            if (sum > coolThreshold) {
                console.log(match);
            }
        }
    }
}

emoji([
    'In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, 
  a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**'
]);
