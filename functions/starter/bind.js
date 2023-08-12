'use strict'

console.log('BIND---------------------------')

function book(flightNum, passengerName) {
    console.log(`${passengerName} booked a seat on ${this.airline} 
        flight ${this.iataCode}${flightNum}`)
    this.bookings.push({flight: `${this.iataCode}${flightNum}`, passengerName})
}

const spiceJet = {
    airline: 'Spice Jet',
    iataCode: 'KJ',
    bookings: []
}

// const eurowings = {
//     airline: 'Eurowings',
//     iataCode: 'EW',
//     bookings: []
// }

// const lufthansa = {
//     airline: 'Lufthansa',
//     iataCode: 'LH',
//     bookings: [],
// }

const bookSJ = book.bind(spiceJet)
const bookEW23 = book.bind(eurowings, 23)
const bookLH = book.bind(lufthansa)

bookSJ(23, "Stevan Williams")
bookLH('23', 'Sachet Wasti')
bookLH('239', 'Wasti Wasti')

bookEW23('Anish')

console.log(spiceJet.bookings)

// With Event Listeners
lufthansa.planes = 300
lufthansa.buyplanes = function () {
    console.log(this)
    this.planes ++
    console.log(this.planes)
}
document
.querySelector('.buy')
.addEventListener('click', lufthansa.buyplanes.bind(lufthansa))

// PARTIAL APPLICATION
const addTax = (rate, value) => {
    return value + value * rate
}

const addVAT = addTax.bind(null, 0.23)
console.log(addVAT(23))
console.log(addVAT(100))