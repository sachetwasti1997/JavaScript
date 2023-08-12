'use strict'

console.log('CALL AND APPLY----------------------')

function book(flightNum, passengerName) {
    console.log(`${passengerName} booked a seat on ${this.airline} 
        flight ${this.iataCode}${flightNum}`)
    this.bookings.push({flight: `${this.iataCode}${flightNum}`, passengerName})
}

const lufthansa = {
    airline: 'Lufthansa',
    iataCode: 'LH',
    bookings: [],
}

book.call(lufthansa, '23', 'Sachet Wasti')
book.call(lufthansa, '239', 'Wasti Wasti')
console.log(lufthansa.bookings)

const eurowings = {
    airline: 'Eurowings',
    iataCode: 'EW',
    bookings: []
}

console.log(book) // it is not a reference to the function but just the function
book.call(eurowings, 243, 'Uma Wasti')
book.call(eurowings, 243, 'Mary Cooper')
console.log(eurowings.bookings)

const indigo = {
    airline: 'Indigo',
    iataCode: 'IN',
    bookings: []
}

book.call(indigo, 243, 'Uma Wasti')
book.call(indigo, 243, 'Mary Cooper')
console.log(indigo.bookings)

// APPLY --------------------------------------------------------------------------
const flightData = [583, 'Goerge Cooper Apply']
book.apply(indigo, flightData)
console.log(indigo.bookings)
const flightData2 = [583, 'Goerge Cooper CALL']
book.call(indigo, ...flightData2)
console.log(indigo)