'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

const NO_NEIGHBOUR = "NO_NEIGHBOUR";

const renderError = function (msg) {
    countriesContainer.insertAdjacentText('beforeend',msg);
}

const getParsedCountryData2 = (data, countryType = '') => {
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

const getCountryData = function (countryCode) {
    fetch(
        `https://restcountries.com/v3.1/alpha/${countryCode}`
    ).then(res => {
        return res.json()
    }).then(data => {
        console.log(data)
        if (!data instanceof Array && +data.status !== 200) throw Error(data.message);
        const [country] = data;
        getParsedCountryData2(country);
        const neighbour = country.borders?.[0];
        if (!neighbour) throw Error(NO_NEIGHBOUR);
        return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
    }).then(res => res.json())
        .then(data => {
            console.log(data)
            const [country] = data;
            getParsedCountryData2(country, 'neighbour');
        })
        .catch(function (err) {
            // console.log(err.message)
            if (err.message === NO_NEIGHBOUR) {
                return;
            }
            renderError(err.message);
        })
        .finally(() => {

        });
}

btn.addEventListener('click', function () {
    getCountryData('GGG');
});