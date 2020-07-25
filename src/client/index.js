// import SASS
import './styles/normalize.scss';
import './styles/style.scss';
import './styles/_main.scss';
import './styles/_tablet.scss';
import './styles/_desktop.scss';
import './styles/_progress-bar.scss';

// import JS
import { handleSubmit } from './js/formValidation.js';
import './js/displayTrip';
import { saveTrip, displayTrips } from './js/displayTrips';
// import { displayCovidLevel } from './js/displayCovidLevel';

// export JS function
export { handleSubmit };
export { saveTrip };

// Main
displayTrips();
