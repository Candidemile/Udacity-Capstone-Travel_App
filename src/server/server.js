// import required modules
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
// import required functions
const countdown = require('./countdown');
const fetchGeonamesApi = require('./geonamesAPI');
const restcountriesApi = require('./restcountriesAPI');
const fetchWeatherbitApi = require('./weatherbitAPI');
const fetchPixabayApi = require('./pixabayAPI');
const getFlightPrice = require('./skyscannerAPI');
const covid = require('./covidAPI');

// variables: trip details, env variables
const trip = {
    departure: 'from',
    destination: {
        city: 'to',
        country: '',
        country_code: '',
        latitude: '',
        longitude: '',
        population: ''
    },
    id: '',
    date: '',
    countdown: '',
    weather: {
        temperature: '',
        icon: '',
        description: ''
    },
    flight: {
        price: '',
        carrier: '',
        direct: ''
    },
    image: '',
    covid: {
        growth: '',
        level: ''
    }
};

dotenv.config();
// process.env.API_ID

// app set up
const app = express();
app.use(express.static('dist'));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// designates what port the app will listen to for incoming requests
const port = process.env.PORT || 80;
app.listen(port, function() {
    console.log(`*** Travel App is listening on port ${port}! ***`);
    // console.log('Base trip variable:\n', trip);
});

// post request about trip
app.post('/trip', async (req, res) => {
    console.log(req.body);
    // set departure city and date
    trip.departure = req.body.departure;
    trip.date = req.body.date;
    // get countdown number
    trip.countdown = countdown(req.body.date).toString();
    // fetch destination data by GeonamesAPI
    let destinationData = await fetchGeonamesApi(req.body.destination);
    trip.destination.city = destinationData.city;
    trip.destination.country_code = destinationData.country_code;
    trip.destination.latitude = destinationData.latitude;
    trip.destination.longitude = destinationData.longitude;
    // console.log('destination data:\n', destinationData);
    // fetch country using country_code by Rest Countries API
    let countryData = await restcountriesApi(trip.destination.country_code);
    trip.destination.country = countryData.country;
    trip.destination.population = countryData.population;
    // fetch weather data from weatherbit API
    // console.log(trip);
    let weatherData = await fetchWeatherbitApi(trip.destination.latitude, trip.destination.longitude, trip.date);
    // console.log(weatherData);
    trip.weather.temperature = weatherData.temperature;
    trip.weather.icon = weatherData.weather_icon;
    trip.weather.description = weatherData.weather_description;
    // fetch image url by pixabay API
    trip.image = await fetchPixabayApi(req.body.destination, '');
    // fetch flight data by skyscannerAPI
    let flightData = await getFlightPrice(req.body.departure, req.body.destination, req.body.date);
    trip.flight.price = flightData.price;
    trip.flight.carrier = flightData.carrier;
    trip.flight.direct = flightData.direct;
    // fetch COVID data by covidAPI
    // console.log(trip);
    let covidData = await covid.fetchCovidApi(trip.destination.country);
    // console.log(covidData, trip.destination.population);
    trip.covid.growth = covid.getCovidGrowthLevel(covidData);
    trip.covid.level = covid.getCovidRiskLevel(covidData, trip.destination.population);

    res.send(trip);
});
