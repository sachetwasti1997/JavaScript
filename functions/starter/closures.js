'use strict';

function secureBooking() {
    let passengerCount = 0;
    return function () {
        passengerCount++
        return passengerCount
    }
}

const booker = secureBooking()
console.log(booker())
console.log(booker())

console.dir(booker)

let count = 0

function incCount() {
    count++;
    console.log(count);
}

incCount()
incCount()
incCount()

console.dir(incCount)