function handleSubmit(event) {
    console.log('::: Starting Form Validation :::');

    event.preventDefault();

    // get input from the form
    let departure = document.getElementById('departure').value;
    let destination = document.getElementById('destination').value;
    let date = document.getElementById('date').value;

    console.log(departure, destination, date);

    // Validate input
    const reg = /[a-zA-Z]+/;
    const regDate = /^(202\d{1})-(\d{1,2})-(\d{1,2})$/g;
    // This function checks if the date is in the future
    const checkDate = (date) => {
        let newDate = new Date(date);
        let currentDate = new Date();
        return newDate - currentDate > 0;
    };
    // Checking if departure, destination and date are valid
    if (!departure.match(reg) || !destination.match(reg) || !date.match(regDate) || !checkDate(date)) {
        alert('Please input valid data!!!');
        return false;
    }

    console.log('::: Form is valid :::\n::: Form is Submitted :::');
}

export { handleSubmit };
