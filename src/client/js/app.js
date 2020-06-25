/* Global Variables */
const url = 'https://community-open-weather-map.p.rapidapi.com/weather?units=metric&';
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + 1 + '.' + d.getDate() + '.' + d.getFullYear();

// Personal API Key for OpenWeatherMap API
const apikey = 'f6a641105amsh3901a1f0f0ca125p1afce6jsnb6d0dd468558';

// GET request info
const reqBodyForGet = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': apikey
    }
};
// Event listener to add function to existing HTML DOM element
document.getElementById('generate').addEventListener('click', main);
/* Function called by event listener */
function main() {
    getOpenWeatherData().then((weatherData) => postOpenWeatherData(weatherData)).then((data) => updateUI(data));
}
/* Function to GET Web API Data*/
const getOpenWeatherData = async () => {
    const zip = 'q=' + document.getElementById('zip').value;
    console.log(zip);
    const response = await fetch(url + zip, reqBodyForGet);
    return response.json();
};

/* Function to POST data */
const postOpenWeatherData = async (weatherData) => {
    const user_response = document.getElementById('feelings').value;
    let temperature = '-';
    let city = '-';
    if (weatherData) {
        console.log(weatherData);
        temperature = weatherData.main.temp.toString() + ' C';
        city = weatherData.name;
    }

    const data = {
        temperature: temperature,
        date: newDate,
        user_response: user_response,
        city: city
    };
    //  POST request info
    const reqBodyForPost = {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    };
    // console.log(JSON.stringify(data));
    const url = 'http://localhost/post';
    console.log('Creating promise');
    const response = await fetch('/post', reqBodyForPost);
    try {
        console.log('trying..');
        const result = await response;
        console.log('done\n');
        return result.json();
    } catch (error) {
        console.log('That is the error: ', error);
    }
};
/* Function to update UI */
const updateUI = (data) => {
    document.getElementById('date').innerHTML = `<h3>${data.date}</h3>`;
    document.getElementById('temp').innerHTML = `<h3>${data.temperature}</h3>`;
    document.getElementById('content').innerHTML = `<h3>${data.user_response}</h3>`;
    document.getElementById('city').innerHTML = `<h3>${data.city}</h3>`;
};
