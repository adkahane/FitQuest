const mongoose = require('mongoose');
const { port, db, secret }    = require('../../');
mongoose.Promise = require('bluebird');
mongoose.connect(db);

const User = require('../models/User');
const Quest = require('../models/Quest');

User.collection.drop();
Quest.collection.drop();

User.save([{
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


Quest.save([{
    name:'Quest 1',
    created_id: '8ureuoe09',
    challenged_id: '8urepoi098',
      new_quest: true,
      diff_level: '12',
      time:'1:27:20',
      distance: 1.27,
      elevation:567,
      quest_score: 15,
      steps:1500, 
      route:[{
          lat:.1, 
          lng:-.02
          },
          {
          lat:.100, 
          lng:-.1
          },
          {
          lat:.7, 
          lng:-2
          },
          {
          lat:.01, 
          lng:-1
          }],
      waypoints:[{
            url:'urlpath', 
            lat:.02, 
            lng:-2
            },
            {
              url:'urlpath', 
              lat:.01, 
              lng:-1
              },
              {
                url:'urlpath', 
                lat:.03, 
                lng:-3
                }]    
},
{
  name:'Quest 1',
  created_id: '8ureuoe09',
  challenged_id: '8urepoi098',
    new_quest: true,
    diff_level: '12',
    time:'1:27:20',
    distance: 1.27,
    elevation:567,
    quest_score: 15,
    steps:1500, 
    route:[{
        lat:.1, 
        lng:-.02
        },
        {
        lat:.100, 
        lng:-.1
        },
        {
        lat:.7, 
        lng:-2
        },
        {
        lat:.01, 
        lng:-1
        }],
    waypoints:[{
          url:'urlpath', 
          lat:.02, 
          lng:-2
          },
          {
            url:'urlpath', 
            lat:.01, 
            lng:-1
            },
            {
              url:'urlpath', 
              lat:.03, 
              lng:-3
              }]    
},
{
  name:'Quest 1',
  created_id: '8ureuoe09',
  challenged_id: '8urepoi098',
    new_quest: true,
    diff_level: '12',
    time:'1:27:20',
    distance: 1.27,
    elevation:567,
    quest_score: 15,
    steps:1500, 
    route:[{
        lat:.1, 
        lng:-.02
        },
        {
        lat:.100, 
        lng:-.1
        },
        {
        lat:.7, 
        lng:-2
        },
        {
        lat:.01, 
        lng:-1
        }],
    waypoints:[{
          url:'urlpath', 
          lat:.02, 
          lng:-2
          },
          {
            url:'urlpath', 
            lat:.01, 
            lng:-1
            },
            {
              url:'urlpath', 
              lat:.03, 
              lng:-3
              }]    
},
{
  name:'Quest 1',
  created_id: '8ureuoe09',
  challenged_id: '8urepoi098',
    new_quest: true,
    diff_level: '12',
    time:'1:27:20',
    distance: 1.27,
    elevation:567,
    quest_score: 15,
    steps:1500, 
    route:[{
        lat:.1, 
        lng:-.02
        },
        {
        lat:.100, 
        lng:-.1
        },
        {
        lat:.7, 
        lng:-2
        },
        {
        lat:.01, 
        lng:-1
        }],
    waypoints:[{
          url:'urlpath', 
          lat:.02, 
          lng:-2
          },
          {
            url:'urlpath', 
            lat:.01, 
            lng:-1
            },
            {
              url:'urlpath', 
              lat:.03, 
              lng:-3
              }]    
}])
.then(quest => {
  console.log(`${quest.length} quests created`);
})
.catch((err) => {
  console.log(err);
})
.finally(() => {
  mongoose.connection.close();
});