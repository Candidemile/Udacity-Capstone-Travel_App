/* Function to update UI for new trip */
export const updateUI = (trip) => {
    document.getElementById('new-trip-destination').textContent = `${trip.destination.city}, ${trip
        .destination.country}`;
    document.getElementById('new-trip-date').textContent = `Departing: ${trip.date}`;
    document.getElementById('new-trip-countdown').textContent = `${trip.countdown} days left`;
    document.getElementById('new-trip-weather').textContent = `Typical weather for that day is:\n${trip.weather
        .temperature}C, ${trip.weather.description}`;
    document.getElementById('new-trip-flight').textContent = `minimum price is ${trip.flight.price}$,\n
        airline - ${trip.flight.carrier},\n ${trip.flight.direct ? 'direct' : 'not direct'}`;
    document.getElementById('new-trip-image').src = trip.weather.icon;
    // document.getElementById('new-trip-image-text').textContent =
    // document.getElementById('new-trip-').textContent =

    document.getElementById('new-trip').classList.remove('hide');
};
