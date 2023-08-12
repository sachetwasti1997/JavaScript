'use strict';


const restaurantObj = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    order: function (starterIndex, mainIndex) {
        return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
    },

    openingHours: {
        thu: {
            open: 11,
            close: 23
        },
        fri: {
            open: 10,
            close: 22
        },
        sat: {
            open: 0,
            close: 12
        }
    },
    orderDelivery: function ({starterIndex = 1, mainIndex = 0,
                                 time = '20:00', address}) {
        console.log(`Order Received ${this.starterMenu[starterIndex]} 
        and ${this.mainMenu[mainIndex]} will be delivered at ${time} at ${address}`);
    }
};

restaurantObj.orderDelivery({
    mainIndex: 2,
    address: 'Bellandur',
    starterIndex: 2,
    time: '15:30'
})

const {name, openingHours, categories} = restaurantObj;

console.log(name, openingHours, categories)

// GIVING ALIASES Default values
const {name: resturantName, openingHours: hours, categories: tags} = restaurantObj;
console.log(resturantName, openingHours, categories)

const {menuR = [], starterMenu: starters = []} = restaurantObj
console.log(menuR, starters)

// Mutating Variables
let aR = 111;
let bR = 999;
const obj = {aR: 23, bR: 7, cR: 14};
({aR,bR} = obj)
console.log(a, b)

//Nested Objects
const {
    fri: {open: oObj, close: cObj}
} = openingHours;

console.log(oObj, cObj)