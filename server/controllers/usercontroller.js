import User from './models';

export function getUser(req,res){
    User.findOne({_id: req.params._id}), function(err, dbObj){
        if(err){
            return err;
        } else {
            res.json({dbObj});
        }
    
    }
}

export function addUser(req,res){
    if(!req.body.user.name || !req.body.user.auth_id){
        res.status(403).end();
    }

    const newUser = newUser(req.body.user);

    newUser.save((err, saved) =>{
        if(err){
            res.status(500).send(err);
        }
        res.json({user: saved});
    });

}