//Initialise Express
const express = require('express');
//Initialise Chalk
const chalk = require('chalk');
//Initialise Debug
//const debug = require('debug');
//Initialise Logging
const morgan = require('morgan');

const app = express();

app.use(morgan('tiny'));

app.get('/', (req, res) => {
    res.send('Hello from Niket');
});

app.listen(8080, () => {
    console.log("Server listening on Port " + chalk.red("8000"));
})