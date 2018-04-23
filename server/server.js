const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes/apiroutes/index');
const path = require('path');

// app.use(express.static('./');
const app = new express();
const PORT = process.env.PORT || 3333;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(routes);

mongoose.Promise = global.Promise;

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/fitquestdb');


app.listen(PORT, function(){
    console.log('Listening on Port ${PORT}');
});
