const express = require('express')
const skills = require('./routes/skills')
const profile = require('./routes/profile')
const mongoose = require('mongoose')
const bodyparser = require('body-parser')
const cors = require('cors')
require('dotenv').config()
const app = express()
app.use(bodyparser.json(),bodyparser.urlencoded())
const PORT = 0041
const URL = "mongodb+srv://hruda:Hruda%400041@cluster0.7y1ln.mongodb.net/hrudanand"
mongoose.connect(URL).then(()=>console.log('database is connected !')).catch(()=>console.error('something is wrong while database connection!'))
// USEING MODULES
app.use(cors())
app.use('/skills',skills)
app.use('/profile',profile)
app.use('/uploads',express.static('uploads'))

app.listen(process.env.PORT || PORT,()=>console.log(`server is runnning ${PORT}`) )