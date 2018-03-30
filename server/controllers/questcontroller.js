import Quest from './models';


export function getQuests(req,res){
    Quest.find().sort(-1), function(err,dBObj){
        if(err){
            return err;
        } else {
            res.json({dbObj});
        }
    }
}

export function getQuest(req,res){
    Quest.findOne({_id: req.params._id}), function(err, dbObj){
        if(err){
            return err;
        } else {
            res.json({dbObj});
        }
    
    }
}

export function addQuest(req,res){
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