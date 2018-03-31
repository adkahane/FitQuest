import Quest from './models';


module.exports = {
    getQuests: function(req,res){
        Quest.find().sort(-1), function(err,dBObj){
            if(err){
                return err;
            } else {
                res.json({dbObj});
            }
        }
    },
    getHighestQuest: function(req,res){
        Quest.find({challenged_id:req.params.id}).sort({quest_score:-1}).limit(1), function(err,dbObj){
            if(err){
                return err;
            } else {
                res.json(dbObj);
            }
        }
    },
    getUserQuests: function(req,res){
        Quest.findOne({created_id: req.params.id}).sort({-1}), function(err, dbObj){
            if(err){
                return err;
            } else {
                res.json({dbObj});
            }
        
        }
    },    
    getQuest: function(req,res){
        Quest.findOne({_id: req.params._id}), function(err, dbObj){
            if(err){
                return err;
            } else {
                res.json({dbObj});
            }
        
        }
    },
    
    addQuest: function(req,res){
        if(!req.body.quest.name){
            res.status(403).end();
        }
    
        const newQuest = newQuest(req.body.quest);
    
        newQuest.save((err, saved) =>{
            if(err){
                res.status(500).send(err);
            }
            res.json({quest: saved});
        });
    
    }
}

