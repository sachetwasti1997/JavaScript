'use strict';

console.log('PROTOTYPAL INHERITANCE')

/*
Previously defined
const Person = function (firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
};
Person.prototype.calcAge = function () {
    console.log(this);
    console.log(2023 - this.birthYear)
}

const steven = new Person('Steven', 1980);
const bob = new Person('Bob', 1995);
 */

/**
 * Prototype of the object, because `Person.prototype` extends from it
 */
console.log(steven.__proto__.__proto__)
console.dir(Person.prototype.constructor)
// ARRAYS
const arr = [3, 6, 4, 5, 9, 3, 4, 9];//new Array()
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype); //true
console.log(arr.__proto__.__proto__ === Object.prototype); //true

Array.prototype.unique = function () {
    return [...new Set(this)]
};

console.log(arr.unique());

const h1 = document.querySelector('h1');
console.dir(h1);

/*
Function also consists of prototypes
 */

console.dir(x => x + 1)