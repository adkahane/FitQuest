import express from ('express');
import bodyParser from ('body-parser');
import mongoose from ('mongoose')//('react-native-mongoose');
import routes from ('./routes/apiroutes/index');
import path from ('path');
import Quest from ('../../server/models/Quest');
import User from ('../../server/models/User');
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
