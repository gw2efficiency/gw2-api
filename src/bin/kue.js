const kue = require('../helpers/kue.js')
const express = require('express')
const auth = require('basic-auth-connect')
const logger = require('../helpers/logger.js')
const config = require('../config/application.js')

const app = express()
kue.createQueue()
app.use(auth(config.kue.username, config.kue.password))
app.use('/', kue.app)
app.listen(config.kue.port, () => logger.info(`Server listening on port ${config.kue.port}`))

module.exports = app
