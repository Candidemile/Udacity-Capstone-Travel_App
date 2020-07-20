/* Function to update UI for saved trip */
export const displayTrip = (trip) => {
    let template = document.getElementById('trip-template').content.cloneNode('true');
    let tripDetails = template.firstElementChild.children;
    // set values for trip:
    // set destination
    tripDetails[1].textContent = `${trip.destination.city}, ${trip.destination.country}`;
    // set date
    tripDetails[2].textContent = `Departing: ${trip.date}`;
    // set countdown
    tripDetails[3].textContent = `${trip.countdown} days left`;
    // set image
    tripDetails[4].firstElementChild.src = trip.image;
    // set weather
    tripDetails[5].children[0].textContent = `Typical weather for that day is:\n${trip.weather.temperature}C, ${trip
        .weather.description}`;
    tripDetails[5].children[1].src = trip.weather.icon;
    // set flight
    tripDetails[6].children[1].textContent = `minimum price is ${trip.flight.price}$,\n
    airline - ${trip.flight.carrier},\n ${trip.flight.direct ? 'direct' : 'not direct'}`;
    // set covid
    tripDetails[6].children[1].textContent = `${trip.destination.country} has ${trip.covid
        .level} level of COVID-19 on ${new Date().toString().slice(4, 15)}`;
    tripDetails[6].children[2].value = 50;
    tripDetails[6].children[2].textContent = '50%';
    tripDetails[6].children[3].textContent = `The growth rate is ${trip.covid.growth}`;
    // add saved trip to the web page
    let trips = document.getElementsByClassName('trips')[0];
    trips.appendChild(template);
};
