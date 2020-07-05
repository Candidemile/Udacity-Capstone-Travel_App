// This function gets COVID-19 data based on country from COVID19 API
export const fetchCovidApi = async (country) => {
    let url = 'https://api.covid19api.com/total/country/' + country;

    let response = await fetch(url);
    console.log(response.status, response.statusText, response.ok);

    if (response.ok) {
        let data = await response.json();
        let len = data.length;
        // console.log(data);
        return data[len - 1];
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
// This function processes COVID data of one day for given country and returns a string describing the level of risk
export const getCovidLevel = (data) => {
    let level = data.Active / data.Recovered;
    console.log(data, level);
    if (level < 0.25) {
        return 'low';
    } else if (level >= 0.25 && level < 0.5) {
        return 'moderate';
    } else if (level >= 0.5 && level < 1) {
        return 'high';
    } else if (level >= 1 && level < 2) {
        return 'very high';
    } else {
        return 'extreme';
    }
};
