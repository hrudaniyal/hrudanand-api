const express = require('express')
const Router = express.Router()

Router.get('/',(req,res)=>{
    res.send('hello user')
})

module.exports = Router