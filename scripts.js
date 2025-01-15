// Fetch data from the API
fetch('http://api.example.com/data')
    .then(response => response.json())
    .then(data => {
        // Display the data in the HTML
        const apiDataElement = document.getElementById('api-data');
        apiDataElement.innerHTML = JSON.stringify(data, null, 2);
    })
    .catch(error => {
        console.error('There was a problem with your fetch operation:', error);
    });