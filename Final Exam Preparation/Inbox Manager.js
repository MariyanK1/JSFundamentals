function inboxManager(input = []) {
    let betterInput = input.slice(0, input.indexOf('Statistics'));
    let obj = {};

    for (const line of betterInput) {
        let [command, username, message] = line.split('->');

        switch (command) {
            case 'Add':
                if (obj.hasOwnProperty(username)) {
                    console.log(`${username} username is already registered`);
                } else {
                    obj[username] = { sent: 0, messages: [] };
                }
                break;

            case 'Send':
                if (obj.hasOwnProperty(username)) {
                    obj[username].sent++;
                    obj[username].messages.push(message);
                }
                break;

            case 'Delete':
                if (obj.hasOwnProperty(username)) {
                    delete obj[username];
                } else {
                    console.log(`${username} not found!`);
                }
                break;
        }
    }

    let arr = Object.entries(obj).sort((a, b) => b[1].sent - a[1].sent || a[0].localeCompare(b[0]));

    console.log(`Users count: ${arr.length}`);
    arr.forEach(i => {
        console.log(`${i[0]}`);
        i[1].messages.forEach(i => console.log(` - ${i}`));
    });
}

inboxManager([
    'Add->Mike',
    'Add->George',
    'Send->George->Hello World',
    'Send->George->Some random test mail',
    'Send->Mike->Hello, do you want to meet up tomorrow?',
    'Send->George->It would be a pleasure',
    'Send->Mike->Another random test mail',
    'Statistics'
])
