/* Function to update UI for new trip */
export const displayNewSearch = (trip) => {
    // new destination
    document.getElementById('new-trip-destination').textContent = `${trip.destination.city}, ${trip.destination
        .country}`;
    // new date
    document.getElementById('new-trip-date').textContent = `Departing: ${trip.date}`;
    // new countdown
    document.getElementById('new-trip-countdown').textContent = `${trip.countdown} days left`;
    // new weather
    document.getElementById('new-trip-weather').textContent = `Typical weather for that day is:\n${trip.weather
        .temperature} C, ${trip.weather.description}`;
    document.getElementById('new-trip-weather-icon').src = trip.weather.icon;
    // new flight
    document.getElementById('new-trip-flight').textContent = `minimum price is ${trip.flight.price}$,\n
        airline - ${trip.flight.carrier},\n ${trip.flight.direct ? 'direct' : 'not direct'}`;
    document.getElementById('new-trip-image').src = trip.image;
    // new covid data
    document.getElementById('new-trip-covid-level').textContent = `${trip.destination.country} has ${trip.covid
        .level} level of COVID-19 on ${new Date().toString().slice(4, 15)}`;
    document.getElementById('new-trip-covid-growth').textContent = `The growth rate is ${trip.covid.growth}`;
    document.getElementById('new-trip-covid-progress').value = 50;
    document.getElementById('new-trip-covid-progress').textContent = '50%';
    // document.getElementById('new-trip-image-text').textContent =
    // document.getElementById('new-trip-').textContent =

    document.getElementById('new-trip').classList.remove('hide');
};
