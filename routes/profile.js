const express = require('express')
const Router = express.Router()
const mongoose = require('mongoose')
const profile = require('../schemas/profile')
const multer = require('multer')
const Storage = multer.diskStorage({
    destination:(res,file,cb)=>{
        cb(null,'uploads')
    },
    filename:(res,file,cb)=>{
        cb(null,file.originalname)
    }
})
const upload = multer({
    storage:Storage
})

Router.get('/',async (req,res)=>{
    const profiledata = await profile.find()
    res.send(profiledata)
})
Router.post('/',upload.single('profile'),(req,res)=>{
    const newProfile = new profile({    
        name:req.body.name,
        designation:req.body.designation,
        image:{
            data:`${req.headers.host}/${req.file.path}`,
            contentType:req.file.mimetype
        }
    })
    newProfile.save()
    res.send('data saved',()=>{
        console.log('data saved at database')
    })

})

module.exports = Router