'use strict';

const PersonConstructor = function (firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
}

PersonConstructor.prototype.calcAge = function () {
    return 2023 - this.birthYear;
}

const StudentCons = function (firstName, birthYear, course) {
    PersonConstructor.call(this, firstName, birthYear);
    this.course = course;
}

StudentCons.prototype = Object.create(PersonConstructor.prototype)// also copies
// the PersonConstructor.prototype.constructor

StudentCons.prototype.introduce = function () {
    return `My name is ${this.firstName} and I am studying ${this.course}`;
}

const mike = new StudentCons("Mike", 1997, "JavaScript");
console.log(mike)
console.log(mike.calcAge());
console.log(mike.introduce())
console.log(mike.course);

StudentCons.prototype.constructor = StudentCons;

console.dir(StudentCons.prototype.constructor)
console.dir(mike.__proto__)
console.dir(mike.__proto__.__proto__)//Person.prototype
console.dir(mike.__proto__.__proto__.__proto__)//Object.prototype

console.log(mike instanceof StudentCons);//true
console.log(mike instanceof PersonConstructor);//true
console.log(mike instanceof Object); // true

