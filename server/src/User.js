const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const userSchema = new mongoose.Schema({
    fullName: {
        type: String
    },
    email: {
        type: String
    },
    phoneNumber: {
        type: String
    },
    password: {
        type: String
    }
})

const User = mongoose.model('User', userSchema)
module.exports = User