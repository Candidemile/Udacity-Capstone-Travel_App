function handleSubmit(event) {
    // check event
    if (!event) {
        throw 'There is no event!!!';
    }
    event.preventDefault();
    // check what text was put into the form field
    let formText = document.getElementById('').value;
    // Validate input
    const reg = /[a-zA-Z]+/;
    if (!formText.match(reg)) {
        alert('Please input some text!!!');
    }

    console.log('::: Form Submitted :::');
    // fetch test
    // fetch('http://localhost:8080/test').then((res) => res.json()).then(function(res) {
    //     document.getElementById('results').innerHTML = res.message;
    // });
    
    console.log(JSON.stringify(input));
    // POST request options
    const requestOptions = {
        method: 'POST',
        mode: 'cors',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(input)
    };
}

export { handleSubmit };