const fetch = require('node-fetch');
// This function gets COVID-19 data based on country from COVID19 API
const fetchCovidApi = async (country) => {
    let url = 'https://api.covid19api.com/total/country/' + country;

    let response = await fetch(url);
    console.log('COVID-19 API: ', response.status, response.statusText, response.ok);

    if (response.ok) {
        let data = await response.json();
        let len = data.length;
        // console.log(data);
        return data[len - 1];
    } else {
        console.log(`ERROR: code ${response.status} ${response.statusText}.`);
    }
    return 'no data';
};
// This function processes COVID data of one day for given country and returns a string describing the level of COVID-19 growth cases
const getCovidGrowthLevel = (data) => {
    let level = 'no data';
    // console.log(data);
    if (data.Active & data.Recovered) {
        level = data.Active / data.Recovered;
    }

    // console.log(data, level);
    if (level < 0.25) {
        return 'low';
    } else if (level >= 0.25 && level < 0.5) {
        return 'moderate';
    } else if (level >= 0.5 && level < 1) {
        return 'high';
    } else if (level >= 1 && level < 2) {
        return 'very high';
    } else if (level >= 2) {
        return 'extreme';
    } else {
        return 'no data';
    }
};
// This function processes COVID data of one day and population for given country and returns a string describing the level of COVID-19 active cases
const getCovidRiskLevel = (data, population) => {
    let level = data.Active / population * 1000;
    // console.log(data, level, population);
    if (level < 0.5) {
        return 'low';
    } else if (level >= 0.5 && level < 1) {
        return 'moderate';
    } else if (level >= 1 && level < 2) {
        return 'high';
    } else if (level >= 3 && level < 5) {
        return 'very high';
    } else if (level >= 5) {
        return 'extreme';
    } else {
        return 'no data';
    }
};

module.exports = {
    fetchCovidApi: fetchCovidApi,
    getCovidGrowthLevel: getCovidGrowthLevel,
    getCovidRiskLevel: getCovidRiskLevel
};
