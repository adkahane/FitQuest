const mongoose = require('mongoose');
const { port, db, secret }    = require('../config/env');
mongoose.Promise = require('bluebird');
mongoose.connect(db);

const User = require('../models/User');
const Quest = require('../models/Quest');

User.collection.drop();
Quest.collection.drop();

User.create([{
    auth_id:'8ureuoe09',
    name:'Jim Bob',
    avatar_url:'url/to/placeholder.jpg',
    points: 27
    },{
    auth_id:'8ureuoe09',
    name:'Joe Bob',
    avatar_url:'url/to/placeholder.jpg',
    points: 33
    },{
    auth_id:'8urepoi098',
    name:'Cray Cray Ray',
    avatar_url:'url/to/placeholder.jpg',
    points: 89
    },{
    auth_id:'8u8908909',
    name:'Billie Joe Jim Bob',
    avatar_url:'url/to/placeholder.jpg',
    points: 36
    }

   
 ])
.then(user => {
  console.log(`${user.length} users created`);
})
.catch((err) => {
  console.log(err);
});


Quest.create([{
    name:
    created_id:
    challenged_id:
      new_quest:
      diff_level:
      time:
      distance:
      elevation:
      quest_score:
      steps:
      route:[{
          lat:17, 
          lng:17
          }]
      waypoints:[{
            url:String, 
            lat:17, 
            lng:17
            }]    
}])
.finally(() => {
  mongoose.connection.close();
});