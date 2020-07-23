const mongoose = require('mongoose')
const Schema = mongoose.Schema ;

const experienceSchema = new Schema({
    "user_id" : 
    {
        type : mongoose.Schema.Types.ObjectId,
        ref: 'users', // reference User collection 
        required: true

    },
    "experiences" :
    [{
    "company name" : String,
    "job title" : String,
    "startDate" : String,
    "endDate" :  String
    }]
})

const experiences = mongoose.model('experience',experienceSchema);
module.exports =  experiences ;