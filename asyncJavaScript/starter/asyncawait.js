'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
console.log(countriesContainer)

///////////////////////////////////////

const getParsedCountryData = (data, countryType = '') => {
    let languages = '';

    for (let i = 0; i < Object.keys(data.languages).length; i++) {
        languages += data.languages[Object.keys(data.languages)[i]] + " ";
    }

    const countryCard = `
            <article class="country ${countryType}">
          <img class="country__img" src="${data.flags['png']}" />
          <div class="country__data">
            <h3 class="country__name">${data.name.common}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${data.population} people</p>
            <p class="country__row"><span>🗣️</span>${languages}</p>
            <p class="country__row"><span>💰</span>${Object.keys(data.currencies)[0]}</p>
          </div>
        </article>
        `;
    console.log(countriesContainer)
    countriesContainer.insertAdjacentHTML('beforeend', countryCard);
    countriesContainer.style.opacity = 1;
}

const getPosition = function () {
    return new Promise(function (resolve, reject) {
        navigator.geolocation.getCurrentPosition(
            position => resolve(position),
            err => reject(err)
        );
    })
};

const whereAmI = async function(countryCode) {
    //Geolocation
    const pos = await getPosition();
    const {latitude, longitude} = pos;

    //Reverse Geocoding
    const resGeo = await fetch(`https://geocode.xyz/${latitude},${longitude}?geoit=json`);
    const dataGeo = await  resGeo.json();

    console.log(dataGeo);

    //Country data
    const res = await fetch(`https://restcountries.com/v3.1/alpha/${countryCode}`);
    const data = await res.json();
    const [country] = data;
    getParsedCountryData(country);
}

whereAmI("PHL").then(res => console.log(res));
console.log("FIRST");
