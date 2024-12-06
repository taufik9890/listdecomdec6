const express = require('express')
const registrationController = require('../../controllers/registrationController')
const secureApi = require('../../middleware/secureApi')
const route = express.Router()

route.post('/registration',  registrationController)




module.exports = route