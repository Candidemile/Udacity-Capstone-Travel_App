// Setup empty JS object to act as endpoint for all routes
projectData = {};

// Require Express to run server and routes
const express = require('express');
// Start up an instance of app
const app = express();
/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
// // Cors for cross origin allowance
const cors = require('cors');
app.use(cors());
// Initialize the main project folder
app.use(express.static('dist'));

// Setup Server
const port = process.env.PORT || 80;
const listening = () => {
    console.log(`The server is running on port ${port}..`);
};
app.listen(port, listening);

/* GET routes */
app.get('/all', function(req, res) {
    res.send(projectData);
    console.log('GET request is being processed. Sending Project data.');
});

/* POST routes */
// POST route for adding temperature, date and user response to projectData
app.post('/post', (req, res) => {
    console.log('POST request is being processed. Adding new data to projectData.\n', req.body);
    if (req.body) {
        projectData.temperature = req.body.temperature;
        projectData.date = req.body.date;
        projectData.user_response = req.body.user_response;
        projectData.city = req.body.city;
    }
    res.send(JSON.stringify(projectData));
    console.log(
        `Temperature: ${projectData.temperature}, date: ${projectData.date}, user_response: ${projectData.user_response}, city: ${projectData.city}`
    );
});
