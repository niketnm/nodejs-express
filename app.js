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
app.set('views', './src/views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index', { list: ['Handlebars', 'EJS'], title: 'NodeJS'});
});

app.listen(8080, () => {
    console.log("Server listening on Port " + chalk.red("8000"));
})