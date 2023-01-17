require('dotenv').config()
const mongoose = require('mongoose')
const {Schema} = mongoose

module.exports.Post = require("./posts.js")

const userSchema = new Schema({
username:{ type: String, required: true},
password:{ type: String, required: true},
posts: [{type: Schema.Types.ObjectId, ref:'fishes'}]
})

const User = mongoose.model('User', userSchema)
module.exports = User