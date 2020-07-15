const fetch = require('node-fetch');

const restcountriesApi = async (code = '') => {
    const url = 'https://restcountries.eu/rest/v2/alpha/';

    let response = await fetch(url + code);
    console.log('Rest Countries API: ', response.status, response.statusText, response.ok);

    if (response.ok) {
        let data = await response.json();

        return data.name;
    } else {
        console.log(`ERROR: code ${response.status} ${response.statusText}.`);
    }
    return 'no data';
};

module.exports = restcountriesApi;
