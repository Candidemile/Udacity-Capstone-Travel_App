/* Function to update UI for saved trip */
export const displayTrip = (trip) => {
    let template = document.getElementById('trip-template').content.cloneNode('true');
    let tripDetails = template.firstElementChild.children;
    // set values for trip:
    tripDetails[1].textContent = `${trip.destination.city}, ${trip.destination.country}`;
    tripDetails[2].textContent = `Departing: ${trip.date}`;
    tripDetails[3].textContent = `${trip.countdown} days left`;
    tripDetails[4].firstElementChild.src = trip.image;
    tripDetails[5].children[0].textContent = `Typical weather for that day is:\n${trip.weather.temperature}C, ${trip
        .weather.description}`;
    tripDetails[5].children[1].src = trip.weather.icon;
    tripDetails[6].children[1].textContent = `minimum price is ${trip.flight.price}$,\n
    airline - ${trip.flight.carrier},\n ${trip.flight.direct ? 'direct' : 'not direct'}`;
    // add saved trip to the web page
    let trips = document.getElementsByClassName('trips')[0];
    trips.appendChild(template);
};
