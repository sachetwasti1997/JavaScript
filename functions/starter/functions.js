console.log("FUNCTIONS ACCEPTING FUNCTIONS-------------------------------------")

const oneWord = function (str) {
    return str.replace(/ /g, '').toLowerCase()
}

const upperFirst = function (str) {
    const [first, ...other] = str.split(' ')
    return [first.toUpperCase(), ...other].join(' ')
}

//Higher Order Function

const transformer = function (str, fn) {
    console.log(`Original String: ${str}`)
    console.log(`Transformed String : ${fn(str)}`)

    console.log(`Transformed By: ${fn.name}`)
}

transformer('JavaScript at its best', upperFirst)
transformer('JavaScript at its best', oneWord)

//JS uses callbacks all the time

const high5 = function () {
    console.log('HIGH FIVE')
}

document.body.addEventListener('click', high5)