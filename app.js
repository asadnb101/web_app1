// required modules
const express = require('express');
const app = express();
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');

// Morgan - middleware
app.use(morgan('tiny'));
app.use(express.static(path.join(__dirname, '/public/')));

// to serve the "/" request
app.get('/', (req,res) => {
    res.send("Hello from my app");
});

// start the server on port 300
app.listen(3000, ()=> {
    console.log(`listening on port ${chalk.green(3000)}`);
    // console.log('Server listening on port' + chalk.green(3000));
});