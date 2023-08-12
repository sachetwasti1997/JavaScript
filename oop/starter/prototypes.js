'use strict';

console.log("PROTOTYPES")

/*
Each and every object in javascript automatically has a property called `prototype`
Every object that is created from the prototype gets access to all the metodhs that we define
in constructor's prototype property
 */
Person.prototype.calcAge = function () {
    console.log(this);
    console.log(2023 - this.birthYear)
}

const steven = new Person('Steven', 1980);
const bob = new Person('Bob', 1995);

steven.calcAge();
bob.calcAge();

console.log(steven.__proto__)
console.log(bob.__proto__ === Person.prototype)
/*
Here Person.prototype is not the prototype of Person, but it is prototype of all the
constructor functions that is going to be created with Person constructor function
 */
console.log(Person.prototype.isPrototypeOf(steven)) //true
console.log(Person.prototype.isPrototypeOf(bob)) //true
console.log(Person.prototype.isPrototypeOf(Person)) //false

// .prototype should have been named to .prototypeOfLinkedObjects

Person.prototype.species = 'Homo Sepians';
console.log(steven, bob);

console.log(steven.hasOwnProperty('firstName')); //true
console.log(steven.hasOwnProperty('species')); //false