// import SASS
import './styles/normalize.scss';
import './styles/style.scss';
import './styles/_main.scss';

// import JS
import { handleSubmit } from './js/formValidation.js';
import './js/displayTrip';
import { saveTrip, displayTrips } from './js/displayTrips';

// export JS function
export { handleSubmit };
export { saveTrip };

// Main
displayTrips();
