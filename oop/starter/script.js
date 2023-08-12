'use strict';

const Person = function (firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
    
    // NEVER do this
    // this.calcAge = function() {
    //
    // }
};

const sachet = new Person('Sachet', 1997);
console.log(sachet)
/*
* 1. New {} is created
* 2. function is called, `this` points to newly created Object ({})
* 3. {} liked to the prototype
* 4. function automatically returns the {}*/

const matilda = new Person('Matilda', 1980);
const jack = new Person('Jack', 1995);

console.log(matilda instanceof Person)
console.log(jack instanceof Person)