import User from './models';


module.exports= {

    getUser: function(req,res){
        User.findOne({auth_id: req.params.id}), function(err, dbObj){
            if(err){
                return err;
            } else {
                res.json({dbObj});
            }
        
        }
    },
    
    addUser: function(req,res){
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
    
    },
    updateUser: function(req,res){
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

}
