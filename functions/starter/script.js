'use strict';

/*  DEFAULT PARAMETERS */

const bookings = []

const createBooking = function (flightNum,
                                numPassengers = 1,
                                price = 199 * numPassengers) {

    /*
    DEFAULT PARAMETERS
    ES5
    numPassengers = numPassengers || 1
    price = price || 1
     */

    const booking = {
        flightNum,
        numPassengers,
        price
    }
    console.log(booking)
    bookings.push(booking)
}

createBooking('LH123')
createBooking('LHA332', 3, 500)
createBooking('L4RT5', 7, 400)


createBooking('LHA332', 3)
