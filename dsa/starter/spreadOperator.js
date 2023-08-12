'use strict';

console.log("SPREAD OPERATOR------------------------------------")

const restaurantSpread = {
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
    },
    orderPasta: function (ing1, ing2, ing3) {
        console.log(`Here is your delicious pasta with ${ing1} ${ing2} ${ing3}`)
    }
};

const arrDS = [7, 8, 9];
const badNewArr = [1, 2, arrDS[0], arrDS[1], arrDS[2]]
console.log(badNewArr)

const newArr = [1, 2, ...arrDS];
console.log(newArr)

const newMenu = [...restaurantObj.mainMenu, 'Gnocci']
console.log(newMenu)

//Copy Array Shallow Copy
const mainMenuCopy = [...restaurantObj.mainMenu];
console.log(mainMenuCopy)
//Joining 2 arrays
const menuSO = [...restaurantObj.mainMenu, ...restaurantObj.starterMenu];
console.log(menuSO)

//--------------------------------------------------------------------------------

const str = 'Sachet';
const letter = [...str, '', 'W.'];
console.log(letter)

//--------------------------------------------------------------------------------

const ingredients = [
    prompt("Let's make a pasta! Ingredient 1?"),
    prompt('Ingredient 2?'),
    prompt('Ingredient 3?')
]

console.log(ingredients)

//Old Way
restaurantSpread.orderPasta(ingredients[0], ingredients[1], ingredients[2]);

//New Way
restaurantSpread.orderPasta(...ingredients);

//-----------------------------------------------------------------------------------

// SPREAD OBJECTS
const newRestaurant = {...restaurantSpread, founder: 'Sachet', foundingYear: '1998'};
console.log(newRestaurant)