
/* Function called by event listener */
function main(event) {
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

