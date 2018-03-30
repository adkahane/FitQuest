import mongoose from 'mongoose';


mongoose.promise = global.Promise;
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    auth_id:{
        type: String,
        required: true
    },    
    name:{
        type:String,
        required:true,
    },
    avatar_url:{
        type:String,
        default:'url/to/defaultfile.jpg'
    },
    level:{
        type: String,
        default:'base level brah!'
    },
    points:{
        type: Number,
        default: 0
    },
    quest:{
        type:Schema.Types.ObjectId,
        ref:"Quest"
    }
    
});

var User = mongoose.model('User', UserSchema);

module.exports = User;