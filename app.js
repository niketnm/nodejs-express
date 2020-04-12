//Initialise Express
const express = require('express');
//Initialise Chalk
const chalk = require('chalk');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello from Niket');
});

app.listen(8080, () => {
    console.log("Server listening on Port 8080");
})