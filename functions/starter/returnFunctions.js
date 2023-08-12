const greet = function (greeting) {
    return function (name) {
        console.log(`${greeting} ${name}`)
    }
}

const greeterHey = greet('Hey')

greeterHey('Sachet')
greeterHey('Stevan')
greet('Hello')('SomeOne')

const greetArrow = (greeting) => {
    return (name) => {
        console.log(`${greeting} ${name}`)
    }
}

const scienceGreeter = greetArrow('Science')
scienceGreeter('Sam')