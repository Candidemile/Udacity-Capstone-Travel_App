// This function gets images based on location from PixabayAPI
const fetch = require('node-fetch');

const fetchPixabayApi = async (city = '', country = '', apikey) => {
    let url = 'https://pixabay.com/api/?';
    url = `${url}key=${apikey}&q=${city}+${country}&category=travel`;

    let response = await fetch(url);
    console.log('Pixabay API: ', response.status, response.statusText, response.ok);

    if (response.ok) {
        let data = await response.json();
        if (data.hits.length > 0) {
            // console.log(data.hits);
            return data.hits[0].webformatURL;
        }
    } else {
        console.log(`ERROR: code ${response.status} ${response.statusText}.`);
    }
    return 'http://placecorgi.com/250';
    // return 'no data';
};

module.exports = fetchPixabayApi;
