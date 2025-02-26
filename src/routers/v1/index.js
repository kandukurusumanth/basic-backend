const router = require('express').Router()
const server = require('./servercheckingrouter')
router.use('/server',server)
module.exports=router
