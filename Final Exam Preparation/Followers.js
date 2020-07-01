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
