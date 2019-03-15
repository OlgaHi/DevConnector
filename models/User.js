const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        requires: true
    },
    email: {
        type: String,
        requires: true
    },
    password: {
        type: String,
        requires: true 
    },
    avatar: {
        type: String,
        required: false
    },
    date: {
        type: Date,
        default: Date.now
    },
});

module.exports = User =mongoose.model('users', UserSchema)