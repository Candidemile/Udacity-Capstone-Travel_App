// This function gets images based on location from PixabayAPI
const fetch = require('node-fetch');

const fetchPixabayApi = async (city = '', country = '') => {
    let url = 'https://pixabay.com/api/?';
    const apikey = '17345474-3a60c5bdac118145706a5886a';
    url = `${url}key=${apikey}&q=${city}+${country}&category=travel`;
    console.log(url);

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
