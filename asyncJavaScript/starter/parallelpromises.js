'use strict';

const getJSON = async function (url) {
    const json = await fetch(url);
    const data = await json.json();
    const country = data[0];
    return country;
};

const get3Countries = async function (c1, c2, c3) {
    const data = await Promise.all([
        getJSON(`https://reestcountries.com/v3.1/alpha/${c1}`),
        getJSON(`https://restcountries.com/v3.1/alpha/${c2}`),
        getJSON(`https://restcountries.com/v3.1/alpha/${c3}`)
    ])
    return  data.map(d => d.capital[0]);
};

(async function () {
    try {
        const data = await get3Countries("PHL", "MEX", "USA");
        console.log(data);
    }catch (e) {
        console.error(e);
    }

})();
