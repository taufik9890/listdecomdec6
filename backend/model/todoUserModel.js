const mongoose = require('mongoose')
const {Schema} = mongoose

const todoUserSchema = new Schema({
    name: String,
    email: String,
    password: String,
    emailVerified: {
        type: Boolean,
        default: false
    },
    otp: String
})

module.exports = mongoose.model("todoUser", todoUserSchema)
