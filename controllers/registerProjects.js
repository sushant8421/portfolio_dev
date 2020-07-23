const projects = require('../models/projects') ;

module.exports = (req, res) => {
    
    projects.create({
        ...req.body,
        user_id: req.session.userId 
    }, (err) => {
        if(err)
            console.log(err);
        else    
            res.send(req.body) ;    
    })
}