// fetch geonames API with city and get latitude, longitude, country
export const fetchGeonamesApi = async () => {
    const url = 'http://api.geonames.org/wikipediaSearchJSON?username=candid_emile&q=moscow';
    // const username;

    let response = await fetch(url);
    console.log(response.status, response.statusText, response.ok);

    if (response.ok) {
        let data = await response.json();
        console.log(data.geonames);
        if (data != []) {
            data = data.geonames[0];
            return {
                latitude: data.lat.toFixed(2),
                longitude: data.lng.toFixed(2),
                country: data.countryCode
            };
        }
    } else {
        console.log(`ERROR: code ${response.status} ${response.statusText}.`);
    }
};
