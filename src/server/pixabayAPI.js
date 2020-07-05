// This function gets images based on location from PixabayAPI
export const fetchPixabayApi = async (city, country) => {
    let url = 'https://pixabay.com/api/?';
    const apikey = '17345474-3a60c5bdac118145706a5886a';
    url = `${url}key=${apikey}&q=${city}+${country}`;

    let response = await fetch(url);
    console.log(response.status, response.statusText, response.ok);

    if (response.ok) {
        let data = await response.json();
        // console.log(data);
        return data.hits[0];
        // if (data != []) {
        //     data = data.geonames[0];
        //     return {
        //         latitude: data.lat.toFixed(2),
        //         longitude: data.lng.toFixed(2),
        //         country: data.countryCode
        //     };
        // }
    } else {
        console.log(`ERROR: code ${response.status} ${response.statusText}.`);
    }
};
