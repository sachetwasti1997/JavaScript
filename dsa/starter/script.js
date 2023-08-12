'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
  }
};

const arr = [2,3,4];
const [a,b,c] = arr;
console.log(a,b,c);

let [first, second] = restaurant.categories ;
let [main, , secondary] = restaurant.categories ;
let [,menu,, sub] = restaurant.categories ;
console.log(first, second);
console.log(main, secondary);
console.log(menu, sub);

//switching variables normal way
const temp = main;
main = secondary;
secondary = temp;

console.log("After Switching",main, secondary);

// switching using destructuring
[menu, sub] = [sub, menu];
console.log("Switching Again", menu, sub);

[main, secondary] = restaurant.order(2,0)
console.log(restaurant.order(2, 0))
console.log(main, secondary)

//Nested
const nested = [2, 4, [5, 6]];
const [i, , [j, k]] = nested;
console.log(i, j, k);

//Default values
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p,q,r)
