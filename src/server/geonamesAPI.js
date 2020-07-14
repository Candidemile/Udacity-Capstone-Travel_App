// fetch geonames API with city and get latitude, longitude, country
const fetch = require('node-fetch');

const fetchGeonamesApi = async (city = '') => {
    const url = 'http://api.geonames.org/wikipediaSearchJSON?username=candid_emile&q=';

    let response = await fetch(url + city);
    console.log(response.status, response.statusText, response.ok);

    if (response.ok) {
        let data = await response.json();
        // console.log(data, data.geonames);
        if (data.geonames.length > 0) {
            data = data.geonames[0];
            return {
                latitude: data.lat.toFixed(2),
                longitude: data.lng.toFixed(2),
                country_code: data.countryCode,
                city: data.title
            };
        }
    } else {
        console.log(`ERROR: code ${response.status} ${response.statusText}.`);
    }
    return {
        latitude: 'no data',
        longitude: 'no data',
        country_code: 'no data',
        city: 'no data'
    };
};

module.exports = fetchGeonamesApi;
