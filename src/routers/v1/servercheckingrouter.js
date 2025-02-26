const express = require('express')
const { checkingserver } = require('../../config')
const app = express()
app.get('/',checkingserver.checkingserver)
module.exports=app