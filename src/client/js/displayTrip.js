/* Function to update UI for saved trip */
export const displayTrip = (trip) => {
    let template = document.getElementById('trip-template').content.cloneNode('true');
    // set id
    template.firstElementChild.id = trip.id;
    // set values for trip:
    let tripDetails = template.firstElementChild.children;
    // set destination
    tripDetails[1].textContent = `${trip.destination.city},${trip.destination.country}`;
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
    tripDetails[7].children[1].textContent = `${trip.destination.country} has ${trip.covid
        .level} level of COVID-19 on ${new Date().toString().slice(4, 15)}`;
    tripDetails[7].children[2].value = 50;
    tripDetails[7].children[2].textContent = '50%';
    tripDetails[7].children[3].textContent = `The growth rate is ${trip.covid.growth}`;
    // function to delete trip
    const deleteTrip = (event) => {
        let trips = JSON.parse(localStorage.trips);
        // console.log('deleting\n', trips, '\n', event.target);
        trips.forEach((element) => {
            if (element.id == event.target.parentElement.id) {
                trips.splice(trips.indexOf(element), 1);
                localStorage.trips = JSON.stringify(trips);
                event.target.parentElement.classList.add('hide');
            }
        });
    };
    tripDetails[8].onclick = deleteTrip;
    // add saved trip to the web page
    let trips = document.getElementsByClassName('trips')[0];
    trips.appendChild(template);
};
