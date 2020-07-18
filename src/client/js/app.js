/* Function to POST trip data to Express app and get trip details */
const fetchTripData = async (data) => {
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
    const url = 'http://localhost:8081/trip';
    console.log('Creating promise');
    const response = await fetch(url, reqBodyForPost);
    try {
        console.log('trying..');
        console.log('done\n');
        return response.json();
    } catch (error) {
        console.log('That is the error: ', error);
    }
};

module.exports = fetchTripData;
