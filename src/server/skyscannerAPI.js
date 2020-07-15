const fetch = require('node-fetch');

// this function returns the lowest ticket price based on two points (departure, destination)
const getFlightPrice = async (from, to, date) => {
    // This function returns PlaceID based on the city
    const getPlaceID = async (city) => {
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

        if (response.ok) {
            let data = await response.json();
            // console.log(data);
            return data.Places[0];
        } else {
            console.log(`ERROR: code ${response.status} ${response.statusText}.`);
        }
    };

    // This function returns PlaceIDs for two cities
    const convert = async (departure, destination) => {
        let from, to;
        from = await getPlaceID(departure);
        to = await getPlaceID(destination);
        return [ from.CityId, to.CityId ];
    };

    // main body of the function
    let key = 'f6a641105amsh3901a1f0f0ca125p1afce6jsnb6d0dd468558';
    let places = await convert(from, to);
    let departure = places[0];
    let destination = places[1];
    let url = `https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/US/USD/en-US/${departure}/${destination}/${date}`;
    // console.log(url);

    let response = await fetch(url, {
        method: 'GET',
        headers: {
            'x-rapidapi-host': 'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com',
            'x-rapidapi-key': key
        }
    });
    console.log('Skyscanner API: ', response.status, response.statusText, response.ok);

    if (response.ok) {
        let data = await response.json();
        console.log(data);
        if (data.Quotes.length > 0) {
            let price = data.Quotes[0].MinPrice;
            let direct = data.Quotes[0].Direct;
            let carrierId = data.Quotes[0].OutboundLeg.CarrierIds[0];
            let carrier = 'no data';
            Object.values(data.Carriers).forEach((elem) => {
                if (elem.CarrierId == carrierId) {
                    carrier = elem.Name;
                }
            });

            return {
                price: price,
                carrier: carrier,
                direct: direct
            };
        }
    } else {
        console.log(`ERROR: code ${response.status} ${response.statusText}.`);
    }
    return {
        price: 'no data',
        carrier: 'no data',
        direct: 'no data'
    };
};

module.exports = getFlightPrice;
