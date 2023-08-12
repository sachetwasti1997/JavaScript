'use script';

// const PersonCl = class {}

class PersonCl {
    constructor(firstName, birthYear) {
        this.firstName = firstName;
        this.birthYear = birthYear;
    }

    //Methods are added to prototype property
    calcAge() {
        console.log(2023 - this.birthYear);
    }

    consoling() {
        console.log(this)
    }
}

const jessica = new PersonCl("Jessica", 1997);
jessica.consoling()
jessica.calcAge();
console.log(jessica.__proto__ === PersonCl.prototype);
PersonCl.prototype.greet = function () {
    console.log(`Hey ${this.firstName}`);
}

jessica.greet();

/*
1. Classes are not hoisted
2. Classes are also first class citizens
3. Classes are executed in strict mode
 */