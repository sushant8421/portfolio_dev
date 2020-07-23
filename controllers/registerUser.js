const user = require('../models/users') ;

module.exports = (req, res) => {
    user.create(req.body, (err) => {
        if(err)
            console.log(err) ;
        else
            res.send(req.body)  
    })
}