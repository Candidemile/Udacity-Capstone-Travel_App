// function to display progress bar for COVID-19 level
const displayCovidLevel = (level) => {
    // 'low' 'moderate' 'high' 'very high''extreme' 'no data';
    // const applyStyle = (level, value) => {
    //     document.querySelector('article aside > progress').classList.add(level);
    //     document.querySelector().value = value;
    //     console.log('covid level:', level, value);
    // };
    switch (level) {
        case 'low':
            return [ 'low', 20 ];
        case 'moderate':
            return [ 'moderate', 40 ];
        case 'high':
            return [ 'high', 60 ];
        case 'very high':
            return [ 'very high', 80 ];
        case 'extreme':
            return [ 'extreme', 100 ];
        default:
            return [ 'no-data', 0 ];
    }
};
