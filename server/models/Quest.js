import mongoose from 'mongoose';


mongoose.promise = global.Promise;
const Schema = mongoose.Schema;

const QuestSchema = new Schema({
    name:{
      type:String,
      required:true
    },
    challenged_id:{
        type:Number,
        required:false 
    },
    new_quest:{
        type: Boolean,
        default: true
    },
    diff_level:{
        type:String,
        required: false
    },
    time:{
        type: String,
        required:false
    },
    distance:{
        type:Number,
        required:false
    },
    elevation:{
        type:Number,
        required:false
    },
    quest_score:{
        type:Number,
       required:false
    },
    steps:{
        type:Number,
        required:false
    },
    route:[{
        latitude:Number, 
        longitude:Number
        }],
    waypoints:[{
            url:String, 
            lat:Number, 
            lng:Number
            }]    
});

var Quest = mongoose.model('Quest', QuestSchema);

module.exports = Quest;