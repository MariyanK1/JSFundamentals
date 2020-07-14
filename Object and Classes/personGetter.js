/*
Input / Output
There will be no input, the data is static and matches the table above.
As output, return an array with Person instances. Submit a function that returns the required output.

*/

function getPersons() {
    class Person {
        constructor(firstName, lastName, age, email) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
            this.email = email;
        }

        toString() {
            return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;
        }
    }
    return [
        new Person('Anna', 'Simpson', 22, 'anna@yahoo.com'),
        new Person('Soldier'),
        new Person('Stephan', 'Johnson', 25),
        new Person('Gabriel', 'Peterson', 24, 'g.p@gmail.com'),
    ];
}
