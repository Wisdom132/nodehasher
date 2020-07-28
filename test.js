const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const port = process.env.PORT || 5000;

const app = express();


// Defining middlewares
app.use(morgan('dev'));
app.use(bodyParser.json());


mongoose.Promise = global.Promise;
// Connecting to the database
mongoose.connect('mongodb://localhost:27017/hasher', {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

require('./user.routes')(app);





app.listen(port, () => {
    console.log('App is Running on port', port)
});