const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true

    },
    password: {
        type: String,
        required: true
    },
    DOB: {
        type: Date,
        required: true
    },
    linkedIn: {
        type: String,
        required: true
    },
    website: {
        type: String,
        required: true
    }

});

const User = mongoose.model('User', userSchema);
module.exports = User;