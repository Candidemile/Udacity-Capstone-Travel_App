import fetchTripData from './app';
import { displayNewSearch } from './displayNewSearch';

// function that handles new search submit
async function handleSubmit(event) {
    console.info('::: Starting Form Validation :::');
    event.preventDefault();
    // get input from the form
    let departure = document.getElementById('departure').value;
    let destination = document.getElementById('destination').value;
    let date = document.getElementById('date').value;
    let data = {
        departure: departure,
        destination: destination,
        date: date
    };
    let trip;
    console.info(departure, destination, date);
    // Validate input
    const reg = /[a-zA-Z]+/;
    const regDate = /^(202\d{1})-(\d{1,2})-(\d{1,2})$/g;
    // This function checks if the date is in the future
    const checkDate = (date) => {
        let newDate = new Date(date);
        let currentDate = new Date();
        return newDate - currentDate > 0;
    };
    // Checking if departure, destination and date are valid
    if (!departure.match(reg) || !destination.match(reg) || !date.match(regDate) || !checkDate(date)) {
        alert('Please input valid data!!!');
        return false;
    }

    // activate loaging gif
    document.getElementById('loading').classList.remove('hide');
    // hide loading gif
    // setTimeout(() => {
    //     document.getElementById('loading').classList.add('hide');
    // }, 3000);

    console.info('::: Form is valid :::\n::: Form is Submitted :::');
    trip = await fetchTripData(data).then((res) => {
        document.getElementById('loading').classList.add('hide');
        // console.log(res);
        displayNewSearch(res);
        return res;
    });
    // save trip in session storage
    sessionStorage.newTrip = JSON.stringify(trip);

    // function to handle save
    // const save = (event) => {
    //     // added "stopImmediatePropagation" to stop multiple listeners being called
    //     event.stopImmediatePropagation();
    //     saveTrip(trip);
    //     document.getElementById('new-trip').classList.add('hide');
    // };
    // document.getElementsByClassName('save')[0].addEventListener('click', save);
}

export { handleSubmit };
