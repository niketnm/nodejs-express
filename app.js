//Initialise Express
const express = require('express');
//Initialise Chalk
const chalk = require('chalk');
//Initialise Debug
const debug = require('debug');
//Initialise Logging
const morgan = require('morgan');
const path = require('path');

const app = express();

app.use(morgan('tiny'));
//app.use(express.static(path.join(__dirname, '/public')));
app.use(express.static(path.join(__dirname, '/node_modules/bootstrap/dist/')));
app.use(express.static(path.join(__dirname, '/node_modules/bootstrap/dist/')));
app.use(express.static(path.join(__dirname, '/node_modules/jquery/dist/')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views/index.html'));
});

app.listen(8080, () => {
    console.log("Server listening on Port " + chalk.red("8000"));
})