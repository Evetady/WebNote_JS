const express = require('express');
const app = express();
const port = 3000;

app.get('/api/data', (req, res) => {
    // Use the API key to authenticate your request
    const API_KEY = require('./api-keys').API_KEY;
    
    fetch(`http://api.example.com/data?api_key=${API_KEY}`)
        .then(response => response.json())
        .then(data => {
            res.json(data);
        })
        .catch(error => {
            console.error('There was a problem with your fetch operation:', error);
            res.status(500).send('Internal Server Error');
        });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});