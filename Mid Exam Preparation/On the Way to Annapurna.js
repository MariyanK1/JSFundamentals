/*
Create a program, that lists stores and the items that can be found in them. You are going to be receiving commands
with the information you need until you get the "End" command. There are three possible commands:
⦁	"Add->{Store}->{Item}"
⦁	Add the store and the item in your diary. If the store already exists, add just the item.
⦁	"Add->{Store}->{Item},{Item1}…,{ItemN}"
⦁	Add the store and the items to your notes. If the store already exists in the diary – add just the items to it. 
⦁	"Remove->{Store}"
⦁	Remove the store and its items from your diary, if it exists.
In the end, print the collection sorted by the count of the items in descending order and then by the names of the stores, again,
in descending order in the following format:

Stores list:
{Store}
<<{Item}>>
<<{Item}>>
<<{Item}>>

Input / Constraints
⦁	You will be receiving information until the “END” command is given.
⦁	There will always be at least one store in the diary.
⦁	Input will always be valid, there is no need to check it explicitly.

Output
⦁	Print the list of stores in the format given above.

Examples
Input:
Add->PeakSports->Map,Navigation,Compass
Add->Paragon->Sunscreen
Add->Groceries->Dried-fruit,Nuts
Add->Groceries->Nuts
Add->Paragon->Tent
Remove->Paragon
Add->Pharmacy->Pain-killers
END	

Output:
Stores list:
PeakSports
<<Map>>
<<Navigation>>
<<Compass>>
Groceries
<<Dried-fruit>>
<<Nuts>>
<<Nuts>>
Pharmacy
<<Pain-killers>>

*/

function solve(input = []) {
    let betterInput = input.splice(0, input.indexOf('END'));
    let obj = {};
    for (const line of betterInput) {
        let [command, storeName, items] = line.split('->');

        switch (command) {
            case 'Add':
                
                if (!obj.hasOwnProperty(storeName)) {
                    obj[storeName] = [];
                    if (items.includes(',')) {
                        items = items.split(',');
                        obj[storeName].push(...items);
                    } else {
                        obj[storeName].push(items);
                    };
                } else {
                    obj[storeName].push(items);
                };
                break;

            case 'Remove':
                if (obj.hasOwnProperty(storeName)) {
                    delete obj[storeName];
                }
                break;
        }
    }

    let arr = Object.entries(obj).sort((a, b) => b[1].length - a[1].length || b[0].localeCompare(a[0]));

    console.log('Stores list:');
    
    for (const store of arr) {
      console.log(store[0]);
      store[1].forEach(store => {
          console.log(`<<${store}>>`);
      })  
    };
}

solve([
    'Add->PeakSports->Map,Navigation,Compass',
    'Add->Paragon->Sunscreen',
    'Add->Groceries->Dried-fruit,Nuts',
    'Add->Groceries->Nuts',
    'Add->Paragon->Tent',
    'Remove->Paragon',
    'Add->Pharmacy->Pain-killers',
    'END'
]);
