'use strict'
const mongoose = require('mongoose')
const os = require('os')
const process = require('process')

const _SECOND = 5000
const countConnect = (app) => { 
  const numConnection = mongoose.connections.length
  console.log('🚀 ~ countConnect ~ numConnection:', numConnection)
}

//check over load
const checkOverLoad = () => {
  setInterval(() => {
    const numConnection = mongoose.connections.length
    
    const numCores = os.cpus().length
    const memoryUsage = process.memoryUsage().rss
    // Assume that maximum number of conections is 5 per core
    const maxConnection = 5 * numCores
    console.log('🚀 ~ setInterval ~ numConnection:', numConnection)
    console.log(`Memory usage: ${memoryUsage/1024/1024} MB`)
    if(numConnection > maxConnection) {
      console.log(`Connection overload`)
    }
  }, _SECOND)
}
module.exports = {countConnect,checkOverLoad}