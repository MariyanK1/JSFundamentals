/*
Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

Rules for a smiling face:

Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
Every smiling face must have a smiling mouth that should be marked with either ) or D
*/

function countSmileys(arr) {
    let pattern = /(?<eyes>:|;)(?<nose>-|~)?(?<mouth>D|\))/;
    let count = 0;
    for (const smile of arr) {
        if (smile.match(pattern)) {
            count++;
        }
    }

    return count;
}

countSmileys([';(',':D', ':~)', ';~D', ':)'])
