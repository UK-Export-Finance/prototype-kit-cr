const express = require('express')
const router = express.Router()


//Start
require('./routes/routes-v1')(router);
require('./routes/routes-v2')(router);


module.exports = router
