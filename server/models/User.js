const mongoose = require('mongoose');


mongoose.promise = global.Promise;
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    auth_id:{
        type: String,
        required: true
    },    
    name:{
        type:String,
        required:false,
    },
    email:{
        type: String,
        unique: true
    },
    avatar_url:{
        type:String,
        default:'url/to/placeholder.jpg'
    },
    points:{
        type: Number,
        default: 0
    },
    quest:{
        type:Schema.Types.ObjectId,
        ref:"Quest"
    },
    steps:{
        type: Number,
        required: false
    },
    distance: {
        type: Number,
        V
    },
    time: {
        type:String,
        required: false
    }
});

var User = mongoose.model('User', UserSchema);

module.exports = User;