/*
Now that Pesho has successfully created an account, he wants to connect with other users and gain as many followers, likes and comments as possible.
Create a program that keeps information about Pesho's followers, likes and comments. Keep a record of the followers,
each with the likes and comments Pesho has received from them.

You will be receiving lines with commands until you receive the "Log out" command.

There are four possible commands:

"New follower: {username}":
Add the username, to your records (with 0 likes and 0 comments). If person with the given username already exists ignore the line.

"Like: {username}: {count}":
If the username doesn't exist, add it to your records with the given count of likes.
If the username exist, increase the count of likes with the given count.

"Comment: {username}":
If the username doesn't exist, add it to your records with 1 comment.
If the username exists, increase the count of commens with 1.

"Blocked: {username}":
Delete all records of the given username. If it doesn’t exist, print:
 "{Username} doesn't exist."

In the end, you have to print the count of followers, each follower with his/her likes and comments (the sum of likes and comments)
sorted in descending order by the likes and then by their username in ascending order in the following format:  
{count} followers
{username}: {likes+comments}
{username}: {likes+comments}
...

Input
You will be receiving lines until you receive the "Log out" command.
The input will always be valid.

Output
Print the users with their likes in the format described above.

Examples
Input:
New follower: gosho
Like: gosho: 5
Comment: gosho
New follower: gosho
New follower: tosho
Comment: gosho
Comment: tosho
Comment: pesho
Log out

Output:
3 followers
gosho: 7
pesho: 1
tosho: 1

*/


function followers(input = []) {
    let obj = {};
    let inputSlice = input.slice(0, input.indexOf('Log out'));

    for (const line of inputSlice) {
        let [action, username, count] = line.split(': ');

        switch (action) {
            case 'New follower':
                if (!obj.hasOwnProperty(username)) {
                    obj[username] = { 'likes': 0, 'comments': 0 };
                }
                break;

            case 'Like':
                if (!obj.hasOwnProperty(username)) {
                    obj[username] = { likes: Number(count), comments: 0 }
                } else {
                    obj[username].likes += Number(count);
                }
                break;

            case 'Comment':
                if (!obj.hasOwnProperty(username)) {
                    obj[username] = { likes: 0, comments: 1 }
                } else {
                    obj[username].comments += 1;
                }
                break;

            case 'Blocked':
                if (obj.hasOwnProperty(username)) {
                    delete obj[username];
                } else {
                    console.log(`${username} doesn't exist.`);
                }
                break;
        }
    }

    let arr = Object.entries(obj);
    arr.forEach(name => {
        name[1] = name[1].likes + name[1].comments;
    })

    let sorted = arr.sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]));

    console.log(`${sorted.length} followers`);
    for (const line of sorted) {
        console.log(`${line[0]}: ${line[1]}`);
    }
}
followers([
    'Like: A: 3',
    'Comment: A',
    'New follower: B',
    'Blocked: A',
    'Comment: B',
    'Like: C: 5',
    'Like: D: 5',
    'Log out'
])
