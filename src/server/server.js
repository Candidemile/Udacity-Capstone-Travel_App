// import required modules
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
// import required functions
const countdown = require('./countdown');

// variables: trip details, env variables
const trip = {
    departure: 'from',
    destination: {
        city: 'to',
        country: 'eldorado',
        country_code: ''
    },
    countdown: 'no data',
    weather: {
        min: '10',
        max: '30',
        precipitation: 'cloudy'
    },
    flight: {
        minprice: '100',
        carrier: 'horns'
    },
    image: 'some URL'
};

dotenv.config();
// process.env.API_ID

// app set up
const app = express();
app.use(express.static('dist'));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
console.log(__dirname);

// designates what port the app will listen to for incoming requests
app.listen(8081, function() {
    console.log('Travel App is listening on port 8081!');
    console.log('Base trip variable:\n', trip);
});

// post request about trip
app.post('/trip', async (req, res) => {
    console.log(req.body);

    trip.countdown = await countdown(req.body.date);

    console.log(trip);

    res.send(trip);
});
