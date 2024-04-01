const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String
})

const UserModel = mongoose.models.user || mongoose.model("user",UserSchema)
module.exports = UserModel