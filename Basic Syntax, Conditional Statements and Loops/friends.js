/*
Make a program that filters a list of strings and returns a list with only your friends name in it.

If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...
Note: keep the original order of the names in the output.


*/

function friend(friends) {
    let newArr = []
    for (const name of friends) {
        if (name.length === 4) {
            newArr.push(name);
        }
    }

    return newArr;
}
