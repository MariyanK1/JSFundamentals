/*
You will read commands until you receive "start of concert" command.
There are two types of commands:

"Add; {bandName}; {member 1}, {member 2}, {member 3}" - applies a band and a list of members to the concert.
All members must be unique so don't add duplicates.
If you receive the same band twice add only those members that aren't present in the list.

"Play; {bandName}; {time}" – the band with the given name plays an amount of time on the stage.
If you receive a band that has already applied in the concert, just increase the band time.
If in both commands the band does not exist, add it.

At the end you have to print the total time and the bands ordered by the time on stage in descending order, then by band name in ascending order. 
Also the final input line will be "{bandName}" and you have to print all members for this band in insertion order.

Input / Constraints
The time of the bands – integer in range [0 – 231 - 1] 
There will always be at least one member in the group
The bands will always have time on stage
The final input line will always contain an existing band name
Input will always be valid and in the range specified. You don’t need to check it

Output
Total time: {totalTime}
{firstBandName} -> {firstBandTime}
{secondBandName} -> {secondBandTime}
{thirdBandName} -> {thirdBandTime}
…
{bandName}
=> {firstMemberName}
=> {secondMemberName}
=> {thirdMemberName}
…

Examples

Input:
Play; The Beatles; 2584
Add; The Beatles; John Lennon, Paul McCartney, George Harrison, Ringo Starr
Add; Eagles; Glenn Frey, Don Henley, Bernie Leadon, Randy Meisner
Play; Eagles; 1869
Add; The Rolling Stones; Brian Jones, Mick Jagger, Keith Richards
Add; The Rolling Stones; Brian Jones, Mick Jagger, Keith Richards, Bill Wyman, Charlie Watts, Ian Stewart
Play; The Rolling Stones; 4239
start of concert
The Rolling Stones

Output:
Total time: 8692
The Rolling Stones -> 4239
The Beatles -> 2584
Eagles -> 1869
The Rolling Stones
=> Brian Jones
=> Mick Jagger
=> Keith Richards
=> Bill Wyman
=> Charlie Watts
=> Ian Stewart
*/




function y(params = []) {
    let betterInput = params.slice(0, params.indexOf('start of concert'));
    let bands = {};
    let playtime = {};
    let totalPlaytime = 0;

    for (const line of betterInput) {
        let [command, bandName, value] = line.split('; ');

        switch (command) {
            case 'Add':
                let members = value.split(', ');
                if (!bands.hasOwnProperty(bandName)) {
                    bands[bandName] = [];
                    for (let i = 0; i < members.length; i++) {
                        if (!bands[bandName].includes(members[i])) {
                            bands[bandName].push(members[i])
                        }
                    }
                } else {
                    for (let index = 0; index < members.length; index++) {
                        if (!bands[bandName].includes(members[index])) {
                            bands[bandName].push(members[index])
                        }
                    }
                }
                break;

            default:
                let timeOnStage = +value;
                totalPlaytime += timeOnStage;
                if (!playtime.hasOwnProperty(bandName)) {
                    playtime[bandName] = 0;
                }
                playtime[bandName] += timeOnStage;
                break;
        }

    }

    console.log(`Total time: ${totalPlaytime}`);

    let playtimeArr = Object
        .entries(playtime)
        .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
        .forEach(member => {
            console.log(`${member[0]} -> ${member[1]}`);
        });


    let bandMembers = Object
        .entries(bands)
        .sort((a, b) => b[0].length - a[0].length);

    let finalBand = params.pop();
    
    console.log(finalBand);
    
    bands[finalBand].forEach(member => {
        console.log(`=> ${member}`);
    });
}
y([
    'Add; The Beatles; John Lennon, Paul McCartney',
    'Add; The Beatles; Paul McCartney, George Harrison',
    'Add; The Beatles; George Harrison, Ringo Starr',
    'Play; The Beatles; 3698',
    'Play; The Beatles; 3828',
    'start of concert',
    'The Beatles'
])
