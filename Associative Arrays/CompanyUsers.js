/*
Write a function which keeps information about companies and their employees. 
You will receive array of strings containing company name and employee's id. 

Add each employee to the given company. Keep in mind that a company cannot have two employees with the same id.
When you finish reading data, order the companies by the name in ascending order. 

Print the company name and each employee's id in the following format:
{companyName}
-- {id1}
-- {id2}
-- {idN}

Input / Constraints
The input come as array of strings, each in the format: "{companyName} -> {employeeId}".
The input always will be valid.
*/

function companyUsers(input = []) {

    let obj = {};

    while (input.length > 0) {
        let [company, ID] = input.shift().split(' -> ');
        if (!obj.hasOwnProperty(company)) {
            obj[company] = [ID];
        } else if (obj.hasOwnProperty(company) && !(obj[company].includes(ID))) {
            obj[company].push(ID)
        }
    }


    let result = new Map(Object.entries(obj).sort());

    for (let [company, id] of result) {
        console.log(`${company}`);
        id.forEach(x => {
            console.log(`-- ${x}`);
        })
    }
}

companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111'
])
