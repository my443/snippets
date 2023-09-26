x = fetch('https://api.chucknorris.io/jokes/random')
    // .then(response => {return response.json();})
    .then(json_response => {console.log(json_response['value'])});

    // console.log(json_response)