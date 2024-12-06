require('dotenv').config()
const express = require('express')
const route  = require('./routes')
const mongoConfig = require('./config/mongoConfig')
const app = express()


app.use(express.json())
mongoConfig()
app.use('/', route)



const port = process.env.PORT || 8000


app.listen(port,()=>{
    console.log('port running');
})