'use strict';

class PersonClassInheritance {
    constructor(fullName, birthYear) {
        this.fullName = fullName;
        this.birthYear = birthYear;
    }

    introduce() {
        return `Hello my name is ${this.fullName}, and I am ${this.calcAge()} years old`;
    }

    calcAge() {
        return 2023 - this.birthYear;
    }
}

class StudentInheritance extends PersonClassInheritance {
    constructor(fullName, birthYear, course) {
        super(fullName, birthYear);
        this.course = course;
    }


}

const std = new StudentInheritance('Sachet Wasti',
    1997, 'JavaScript');
console.log(std)