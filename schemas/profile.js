const mongoose = require('mongoose')

const profileSchema =new mongoose.Schema({
    name:String,
    designation:String,
    image:{
        data:String,
        contentType:String
    }
})
module.exports = mongoose.model('profile',profileSchema)