const skills = require('../models/skills') ;

module.exports = (req, res) => {
    skills.create({
        ...req.body,
        user_id: req.session.userId            
        }, (err) => {
        if(err)
            console.log(err) ;
        else
            res.send(req.body)  
    })
}