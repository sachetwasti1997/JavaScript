'use strict';

function calcAge(birthYear) {
    console.log(firstName)
    
    function printAge() {
        var millenium = true;
        age -= 2
        let output = `${firstName}, you are ${age} years old, and are born in ${birthYear}`;
        console.log(output);
        if (birthYear >= 1981 && birthYear <= 1997) {

            //Creating new variable with same name as outer scope's variable
            const firstName = 'Sachet';

            //Reassigning outer scope's variable
            output = 'NEW OUTPUT!'

            const str = `Oh you are a millenial, ${firstName}`;
            console.log(str)

            function add(a, b) {
                return a+b;
            }
        }
        //console.log(str)//cannot access as const and let are blocked scope
        //console.log(millenium)//can access this as var is function scoped
        // console.log(add(2,3))
        // cannot do this as function is also block scoped, works if we remove the strict mode
        console.log(output)
    }

    let age = 2023 - birthYear;
    printAge()
    return age;
}

const firstName = 'Sachet';
calcAge(1997)

//------------------------------------------------------------------------------

me = 1
console.log(me);
// console.log(job);
// console.log(year);

var me = 'Sachet';
let job = 'SDE';
const year = 1997;

//---------------------------------------------------------------------------------

//Functions

console.log(addDecl(2, 3))
// console.log(addExpr(2, 3))
// console.log(addArrow(2, 3))

function addDecl(a, b) {
    return a + b;
}

const addExpr = (a, b) => {
    return a + b
}

const addArrow = (a, b) => a+b

//--------------------------------------------------------------------------------------

//Example not use var

if (!numProducts) deleteAllItems()

var numProducts = 10

function deleteAllItems() {
    console.log("All Items Deleted")
}

//-----------------------------------------------------------------------------------------

var x = 1; // property created with var will create a property in global window object
let y = 2;
const z = 3;

console.log(x === window.x)
console.log(y === window.y)
console.log(z === window.z)

//------------------------------------------------------------------------------------------
//                    THIS


console.log(this) // simply the window object
const calculateAge = function(birthYear) {
    console.log(2023 - birthYear)
    console.log(this) // this is undefined in 'strict mode', but without 'strict mode'
    //it is window object
}

calculateAge(1997)

const calculateAgeArrow = (birthYear) => {
    console.log(2023 - birthYear)
    console.log(this) // this is window object here, arrow function does
    // not get its this keyword, it uses lexical this
}

calculateAgeArrow(1997)

const sachet = {
    year: 1997,
    calcAge: function () {
        console.log(this)
        console.log(2023 - this.year)
    }
}

sachet.calcAge()

const matilda = {
    year: 2017
}

matilda.calcAge = sachet.calcAge
matilda.calcAge()

const f = sachet.calcAge
// f()

//-----------------------------------------------------------------------------------

const jonas = {
    firstName: 'Jonas',
    year: 1991,
    calcAge: function () {
        console.log(this)
        console.log(2023 - this.year)
        /*
        * The `this` inside isMellenial keyword is undefined as for simple function call this is undefined
        * one solution to the problem is using a variable self like below*/
        const self = this;
        const isMellenial = function () {
            // console.log(this.year >= 1981 && this.year <= 1996); will throw error for this is undefined
            console.log(this)
            console.log(self.year >= 1981 && self.year <= 1996);
        }
        isMellenial()

        /*Another solution is to use the arrow function*/
        const isMellenial2 = () => {
            // console.log(this.year >= 1981 && this.year <= 1996); will throw error for this is undefined
            console.log(this)
            console.log(this.year >= 1981 && this.year <= 1996);
        }
        isMellenial2()
    },
    /*
        this is window object, because arrow function takes `this` from nearest parent function
        which in this case is the window object
     */
    greet: () => `Hey, ${this.firstName}`,//advisable not to use arrow function inside an object
    /*
    * Issue solved using a normal function call*/
    greet2: function () {
        
        return `Hey, ${this.firstName}`
    }
}

console.log(jonas.greet())
console.log(jonas.greet2())
jonas.calcAge()

//          ARGUMENTS

/*
* Arguments not present in arrow functions*/
const addExpr2 = function (...arr) {
    console.log(arguments)
    for (let key in arguments) {
        console.log(arguments[key])
    }
    const res = arr.reduce((previousValue, currentValue, currentIndex, array) => {
        return previousValue+currentValue
    }, 0)
    console.log(res)
}

addExpr2(2, 5, 6, 3, 7)