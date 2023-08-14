'use strict';

const lotteryPromise = new Promise(function (resolve, reject) {
    console.log("Lottery draw is happening!");
    setTimeout(function () {
        if (Math.random() >= 0.5) {
            resolve('YOU WIN')
        } else {
            reject(new Error('You lost money'))
        }
    }, 2000);
});

lotteryPromise
    .then(res => console.log(res))
    .catch(err => console.log(err));

const wait = function (seconds) {
    return new Promise(function (resolve) {
        setTimeout(resolve, seconds * 1000);
    });
}

wait(1)
    .then(res => {
        console.log("1 second passed!");
        return wait(1);
    })
    .then(res => {
        console.log("2 seconds passed!");
        return wait(1);
    })
    .then(res => {
        console.log("3 seconds passed!")
        return wait(1);
    })
    .then(res => console.log("4 seconds passed!"))

// GEO LOCATION API JAVASCRIPT
const getPosition = function () {
    // return new Promise(function (resolve, reject) {
    //     navigator.geolocation.getCurrentPosition(
    //         position => resolve(position),
    //         err => reject(err)
    //     );
    // })

    return new Promise(
        (resolve, reject) =>
            navigator.geolocation.getCurrentPosition(resolve, reject));
};

getPosition()
.then(pos => console.log(pos))
.catch(err => console.error(err));

const whereAmI = function () {
    getPosition()
        .then(pos => {
            console.log(pos);
            const {latitude: lat, longitude: lng} = pos.coords;
            return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`);
        })
        .then(res => {
            if (!res.ok) throw Error(`Problem with geocoding ${res.status}`);
            return res.json();
        })
        .then(data => {
            console.log(data)
        })
}

whereAmI()

