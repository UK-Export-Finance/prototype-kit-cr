const express = require('express')
const router = express.Router()


//Start
require('./routes/routes-v1')(router);


module.exports = router
