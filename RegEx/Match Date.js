function matchDates(input = []) {
    let pattern = /(?<day>\d{1,})-(?<month>\w{3})-(?<year>\d{4})/gm;
    let arr = [];
    let validDate = null;

    while ((validDate = pattern.exec(input)) !== null) {
        arr.push(validDate[0])
    }

    arr.forEach(date => {
        console.log(`Valid date => ${date}`);
    })
}

matchDates(['I am born on 30-Dec-1994. My father is born on the 9-Jul-1955. 01-July-2000 is not a valid date. 02.May-1994 is not valid too.'])
