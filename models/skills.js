const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const skillSchema = new Schema({
    "user_id": {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users', // reference User collection 
        required: true

    },
    "languages": Array,
    "frameworks": Array,
    "others": Array
})

const Skills = mongoose.model('Skill', skillSchema);
module.exports = Skills;