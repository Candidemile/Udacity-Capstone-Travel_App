// import SASS
import './styles/normalize.scss';
import './styles/style.scss';
import './styles/_main.scss';
import './styles/_tablet.scss';
import './styles/_desktop.scss';
import './styles/_progress-bar.scss';
import './styles/_print.scss';

// import JS
import { handleSubmit } from './js/formValidation.js';
import './js/displayTrip';
import { saveTrip, displayTrips } from './js/displayTrips';

// export JS function
// export { handleSubmit };
// export { saveTrip };

// Main
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM fully loaded and parsed');
    // display all trips from localStorage
    displayTrips();
    // add eventListeners
    document.getElementById('submit').onclick = handleSubmit;
    document.getElementsByClassName('save').onclick = saveTrip;
});
