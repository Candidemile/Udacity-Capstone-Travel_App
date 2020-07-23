import { displayTrip } from './displayTrip';

// function to save trip in localStorage
export const saveTrip = (trip) => {
    let trips = [];
    // create trips if it doesn't exist
    if (localStorage.trips != undefined) {
        trips = JSON.parse(localStorage.trips);
    }
    // generate id
    let id = new Date().getTime();
    trip.id = id;
    trips.push(trip);
    localStorage.trips = JSON.stringify(trips);
    console.log(localStorage.trips);
    displayTrip(trip);
};

export const displayTrips = () => {
    let trips = [];
    // create trips if it doesn't exist
    if (localStorage.trips != undefined) {
        trips = JSON.parse(localStorage.trips);
    }
    // function to sort trips by date
    const sortTripsByDate = (trip1, trip2) => {
        return new Date(trip1.date) - new Date(trip2.date);
    };
    trips = trips.sort(sortTripsByDate);
    // console.log(trips);
    trips.forEach(displayTrip);
};
