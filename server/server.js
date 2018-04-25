const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('react-native-mongoose');
const routes = require('./routes/apiroutes/index');
const path = require('path');
const Quest = require('../../server/models/Quest');
const User = require('../../server/models/User');
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
