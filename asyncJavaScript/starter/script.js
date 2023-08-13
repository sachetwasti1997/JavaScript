'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

const getParsedCountryData = (data, countryType = '') => {
    let languages = '';

    for (let i=0; i<Object.keys(data.languages).length; i++) {
        languages += data.languages[Object.keys(data.languages)[i]]+" ";
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

    countriesContainer.insertAdjacentHTML('beforeend',countryCard);
    countriesContainer.style.opacity = 1;
}

const getData = function (country) {
    const request = new XMLHttpRequest();
    request.open('GET', `https://restcountries.com/v3.1/alpha/${country}`);
    let data = [];
    request.onload = () => {
        [data] = JSON.parse(request.responseText);
        console.log(data);
        getParsedCountryData(data);
        const neighbour = data?.borders?.[0];
        if (!neighbour) return;
        const request2 = new XMLHttpRequest();
        request2.open('GET', `https://restcountries.com/v3.1/alpha/${neighbour}`);
        let data2 = [];
        request2.onload = () => {
            [data2] = JSON.parse(request2.responseText);
            console.log(data2);
            getParsedCountryData(data2, 'neighbour');
        }
        request2.send();
    }
    request.send();
}

// getData("MEX");
