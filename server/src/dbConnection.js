const mongoose = require('mongoose')
function dbConnect(str) {
    return mongoose.connect(str)
}
module.exports = dbConnect