const express = require('express')
const morgan = require('morgan')
const { default:helmet } = require('helmet')
const compression = require('compression')
const app = express()
require('dotenv').config()

// init middleware
app.use(morgan('dev'))
app.use(helmet())
app.use(compression())
//init db
require('./dbs/init.mongodb')
// const {checkOverLoad} = require('./helpers/check.connect')
// checkOverLoad()
//init routers
app.get('/', (req, res,next) => {
    res.status(200).json({
        message: 'Hello world'
    })
})
//handling errors
module.exports = app;