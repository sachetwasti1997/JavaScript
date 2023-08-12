'use strict';

let f;

const g = function () {
    const a = 23;
    f = function () {
        console.log(a * 2)
    }
}

const h = function () {
    const b = 777;
    f = function () {
        console.log(b * 2)
    }
}

g();
f();
console.dir(f);

//Reassign f
h();
f();
console.dir(f);

// ------------------------------------------------------------------------

const boardPassengers = function (n, wait) {
    const perGroup = n / 3;
    
    const boardHelper = function () {
        console.log(`Boarding all ${n} passengers`);
        console.log(`There are three groups with each ${Math.trunc(perGroup)} people!`);
    }

    setTimeout(boardHelper, wait * 1000)

    console.log(`Will start boarding in ${wait} seconds`)
}

boardPassengers(1000, 6)