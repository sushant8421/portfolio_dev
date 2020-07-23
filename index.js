const express = require('express')
const app = express() ;
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const expressSession = require('express-session')
const registerUserController = require('./controllers/registerUser') ;
const loginUserController = require('./controllers/loginUser') ;
const userSkillsController = require('./controllers/registerSkill') ;
const getUserController = require('./controllers/getUser') ;
const userExperienceController = require('./controllers/registerExperiences') ;
const userProjecController = require('./controllers/registerProjects') ;

app.use(express.json());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: "true"})) ;
app.use(expressSession({secret: 'keyboard cat'})) 

mongoose.connect("mongodb://localhost/dev_portfolio",{ useNewUrlParser: true },
(err) => {
    if(err)
        console.log(err) ;
    else
        console.log("database successfully connected") ;   
})

app.post('/newUser', registerUserController) ;
app.post('/login', loginUserController) ;
app.post('/skills', userSkillsController) ;
app.get('/getUser/:id', getUserController) ;
app.post('/experiences', userExperienceController) ;
app.post('/projects', userProjecController) ;

app.get('/', (req, res) => {
    res.send("home page") ;
})

app.listen(3000, () => {
    console.log("connnected to server on port 3000") ;  
})




