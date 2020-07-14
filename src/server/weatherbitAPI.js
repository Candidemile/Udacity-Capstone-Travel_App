// This function gets weather historic data based on city, country, start date, end date from WeatherbitAPI
const fetch = require('node-fetch');

const fetchWeatherbitApi = async (latitude, longitude, date) => {
    let url = 'https://api.weatherbit.io/v2.0/history/hourly?';
    const apikey = '1d52fb608d9c469da6af57ee37c93a9b';
    let lastYearDate = date.split('-');
    lastYearDate[0] = (parseInt(lastYearDate[0]) - 1).toString();
    lastYearDate = lastYearDate.join('-');
    url = `${url}key=${apikey}&lat=${latitude}&lon=${longitude}&start_date=${lastYearDate}:12&end_date=${lastYearDate}:13`;

    let response = await fetch(url);
    console.log(response.status, response.statusText, response.ok);

    if (response.ok) {
        let data = await response.json();
        // console.log(data);
        return {
            temperature: data.data[0].temp,
            weather_icon: 'https://www.weatherbit.io/static/img/icons/' + data.data[0].weather.icon + '.png',
            weather_description: data.data[0].weather.description
        };
    } else {
        console.log(`ERROR: code ${response.status} ${response.statusText}.`);
        return {
            temperature: 'no data',
            weather_icon: 'no data',
            weather_description: 'no data'
        };
    }
};

module.exports = fetchWeatherbitApi;
