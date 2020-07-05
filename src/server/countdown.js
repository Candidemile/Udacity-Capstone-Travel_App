// This function determines a number of days between future travel date and current date
export const countdown = (travelDate) => {
    let currentDate = new Date();
    travelDate = new Date(travelDate);
    let differentInMilliseconds = travelDate - currentDate;
    let countdown = differentInMilliseconds / 1000 / 60 / 60 / 24;
    return Math.floor(countdown);
};
