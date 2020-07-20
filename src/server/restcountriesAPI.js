const fetch = require('node-fetch');
// This function gets country data with country code from RestCountries API and returns country name and population
const restcountriesApi = async (code = '') => {
    const url = 'https://restcountries.eu/rest/v2/alpha/';

    let response = await fetch(url + code);
    console.log('Rest Countries API: ', response.status, response.statusText, response.ok);

    if (response.ok) {
        let data = await response.json();

        return {
            country: data.name,
            population: data.population
        };
    } else {
        console.log(`ERROR: code ${response.status} ${response.statusText}.`);
    }
    return 'no data';
};

module.exports = restcountriesApi;
