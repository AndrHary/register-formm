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
userSchema.pre('save', function (next) {
    bcrypt.hash(this.password, 9)
        .then(hashPas => {
            this.password = hashPas
            return next()
        })
})
const User = mongoose.model('User', userSchema)
module.exports = User