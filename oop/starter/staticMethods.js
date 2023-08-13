'use strict';

const arrStatic = Array.from(document.querySelectorAll('h1'))
console.log(arrStatic)

const Animal = function (species, age) {
    this.spec = species;
    this.age = age;
};

Animal.hey = function () {
    console.log(`Hey Animal!`)
}

class AnimalCl {
    constructor(species, age) {
        this.spec = species;
        this.age = age;
    }

    static hey() {
        console.log('Hey there!')
        console.log(this)
    }
}

AnimalCl.hey();