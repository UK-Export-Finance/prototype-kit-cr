const express = require('express')
const router = express.Router()


//CREATE
require('./routes/create/routes-v1')(router);



//UNLOCK
router.use(/\/unlock\/version-([0-9]+)/, (req, res, next) => {
	req.version = req.originalUrl.split('/')[2]
	require(`./views/unlock/version-${req.params[0]}/routes`)(req, res, next);
})
router.use(/\/unlock\/experimental/, (req, res, next) => {
	req.version = req.originalUrl.split('/')[2]
	require(`./views/unlock/experimental/routes`)(req, res, next);
})


//CREATE (DAN)
router.use(/\/create\/version-([0-9]+)/, (req, res, next) => {
	req.version = req.originalUrl.split('/')[2]
	require(`./views/create/version-${req.params[0]}/routes`)(req, res, next);
})
router.use(/\/create\/experimental/, (req, res, next) => {
	req.version = req.originalUrl.split('/')[2]
	require(`./views/create/experimental/routes`)(req, res, next);
})


//APPOINTMENTS
router.use(/\/appointments\/version-([0-9]+)/, (req, res, next) => {
	req.version = req.originalUrl.split('/')[2]
	require(`./views/appointments/version-${req.params[0]}/routes`)(req, res, next);
})
router.use(/\/appointments\/tickets-for-dev\/designs/, (req, res, next) => {
	req.version = req.originalUrl.split('/')[2]
	require(`./views/appointments/tickets-for-dev/designs/routes`)(req, res, next);
})


module.exports = router
