const experience = require('../models/experiences') ;

module.exports = (req, res) => {
    
    experience.create({
        ...req.body,
        user_id: req.session.userId 
    }, (err) => {
        if(err)
            console.log(err);
        else    
            res.send(req.body) ;    
    })
}