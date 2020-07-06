/*
Inbox Manager
Create a program that manages users and Emails sent by users. You need to keep information about their username and their sent Emails.
The Emails are represented as strings. You will be receiving lines with commands separated by "->" until you receive the "Statistics" command.

There are three possible commands:
"Add->{username}":
Check if the username exists and if it does print:
"{username} is already registered"
 If it doesn’t exist, then add the user to the collection of users.

"Send->{username}->{Email}"
Add the {Email} to the {username}'s collection of sent Emails.
"Delete->{username}":

Delete the given user, if he exists. If the user doesn’t exist, print:
"{username} not found!"

In the end, you have to print the count of users, each user with his/her Emails. Users need to be sorted in descending order by 
the count of sent Emails and then by their username in ascending order in the following format:  
Users count: {count}
{username} 
 - {Email1}
 - {Email2}
 - {Emailn}

Input
You will be receiving lines until you receive the "Statistics" command.
The commands will be in the format described above.

Output
Print the collection in the format described above after the "Statistics" command. 

Sample case:

In:
Add->Mike
Add->George
Send->George->Hello World
Send->George->Some random test mail
Send->Mike->Hello, do you want to meet up tomorrow?
Send->George->It would be a pleasure
Send->Mike->Another random test mail
Statistics

Out:
Users count: 2
George
 - Hello World
 - Some random test mail
 - It would be a pleasure
Mike
 - Hello, do you want to meet up tomorrow?
 - Another random test mail
*/
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
