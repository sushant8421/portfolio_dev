const User = require('../models/users')

module.exports = (req, res) =>{
    const { username, password } = req.body;

    User.findOne({username:username}, (error,user) => {
        if (user){ 
           // console.log(password) ;
            if(password === user.password){ 
                req.session.userId = user._id            
                res.send("user login successfull") ;
            }
            else{
                res.send("password is incorrect") ;
            }
        }  
        else
            res.send("user not fount") ;
       })
    }