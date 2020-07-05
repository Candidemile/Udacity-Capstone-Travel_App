// This function gets weather historic data based on city, country, start date, end date from WeatherbitAPI
export const fetchWeatherbitApi = async (city, country, start_date, end_date) => {
    let url = 'https://api.weatherbit.io/v2.0/history/daily?';
    const apikey = '1d52fb608d9c469da6af57ee37c93a9b';
    url = `${url}key=${apikey}&city=${city}&country=${country}&start_date=${start_date}&end_date=${end_date}`;

    let response = await fetch(url);
    console.log(response.status, response.statusText, response.ok);

    if (response.ok) {
        let data = await response.json();
        // console.log(data);
        return data.data[0];
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
