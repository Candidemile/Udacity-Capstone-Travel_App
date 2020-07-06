// This function returns PlaceID based on the city
export const getPlaceID = async (city) => {
    let url =
        'https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/US/USD/en-US/?query=' +
        city;
    let key = 'f6a641105amsh3901a1f0f0ca125p1afce6jsnb6d0dd468558';

    let response = await fetch(url, {
        method: 'GET',
        headers: {
            'x-rapidapi-host': 'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com',
            'x-rapidapi-key': key
        }
    });
    console.log(response.status, response.statusText, response.ok);

    if (response.ok) {
        let data = await response.json();
        // console.log(data);
        return data.Places[0];
        // if (data != []) {
        //     data = data.geonames[0];
        //     return {
        //         latitude: data.lat.toFixed(2),
        //         longitude: data.lng.toFixed(2),
        //         country: data.countryCode
        //     };
        // }
    } else {
        console.log(`ERROR: code ${response.status} ${response.statusText}.`);
    }
};

// This function returns PlaceIDs for two cities
const convert = async () => {
    let one, two;
    await getPlaceID('sochi').then((res) => (one = res));
    await getPlaceID('moscow').then((res) => (two = res));
    console.log(one, two);
    return [ one, two ];
};

// this function returns lowers ticket price based on two cities (departure, destination)
const getFlightPrice = async (array) => {
    let key = 'f6a641105amsh3901a1f0f0ca125p1afce6jsnb6d0dd468558';
    let departure = array[0].PlaceId;
    let destination = array[1].PlaceId;
    let date = '2020-08-01';

    let response = await fetch(
        `https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/US/USD/en-US/${departure}/${destination}/${date}`,
        {
            method: 'GET',
            headers: {
                'x-rapidapi-host': 'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com',
                'x-rapidapi-key': key
            }
        }
    );
    console.log(response.status, response.statusText, response.ok);

    if (response.ok) {
        let data = await response.json();
        // console.log(data);
        return data;
        // if (data != []) {
        //     data = data.geonames[0];
        //     return {
        //         latitude: data.lat.toFixed(2),
        //         longitude: data.lng.toFixed(2),
        //         country: data.countryCode
        //     };
        // }
    } else {
        console.log(`ERROR: code ${response.status} ${response.statusText}.`);
    }
};
