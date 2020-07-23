const mongoose = require('mongoose')
const Schema = mongoose.Schema ;

const projectSchema = new Schema({
    "user_id" : 
    {
        type : mongoose.Schema.Types.ObjectId,
        ref: 'users', // reference User collection 
        required: true

    },
    "projects" :
    [{
    "title" : String,
    "description" : String,
    "startDate" : String,
    "endDate" : String
    }]
})

const Projects = mongoose.model('project',projectSchema);
module.exports =  Projects ;