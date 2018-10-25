//********anytime you are working with an asynchronous function, create a Promise based function. *****//
//****************************************************************************************************//
//resolve == success == done is our go-to
//reject == failure is our put-on-the-brakes, something-didn't-go-right

function getData() {
    return new Promise((resolve, reject) => {

        $.ajax({
            url: `http://www.omdbapi.com/?t=The+Matrix`,
            method: 'GET'
        }).done((response) => {
            //this means my api call suceeded, so I will call resolve on the response
            resolve(response);
        }).fail((fail) => {
            //this means the api call failed, so I will call reject on the error
            reject(error);
        })
    });
}
getData()
    .then(data => console.log(data))
    .catch(error => console.log(error));




//
function getData(movieTitle) {
    return new Promise((resolve, reject) => {
        request(`http://www.omdbapi.com/?t=${movieTitle}`, (error, res, movieData) => {

            if (error) reject(error);
            else resolve(movieData);
        });
    });
}