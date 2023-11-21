const express = require('express')
const router = express.Router()


//Start
require('./routes/routes-v1')(router);
require('./routes/routes-v2')(router);
require('./routes/routes-v3')(router);
require('./routes/routes-v4')(router);
require('./routes/routes-v5')(router);
require('./routes/routes-v6')(router);


module.exports = router
