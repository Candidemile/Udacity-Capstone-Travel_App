/* Function to update UI */
const updateUI = (data) => {
    document.getElementById('date').innerHTML = `<h3>${data.date}</h3>`;
    document.getElementById('temp').innerHTML = `<h3>${data.temperature}</h3>`;
    document.getElementById('content').innerHTML = `<h3>${data.user_response}</h3>`;
    document.getElementById('city').innerHTML = `<h3>${data.city}</h3>`;
};
