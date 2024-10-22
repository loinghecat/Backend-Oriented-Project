'use strict'
const mongoose = require('mongoose')
const { db:{host,name,port} } = require('../configs/config.mongodb')
const connectString = `mongodb://${host}:${port}/${name}`;


class Database {
  constructor() {
    this.connect()
  }

  connect(type = 'mongodb') {
    if(1===1) {
      mongoose.set('debug', true)
      mongoose.set('debug', {color: true})
    }
    mongoose.connect(connectString)
      .then(() => {
        console.log('Database connection successful')
        console.log('🚀 ~ Database ~ connect ~ connectString:', connectString)

      })
      .catch(err => {
        console.error('Database connection error',err.message)
      })
  }
    
  static getInstance() {
    if(!Database.instance) {
      Database.instance = new Database()
    }
    return Database.instance
  }
}

const instanceMongodb = Database.getInstance()
module.exports = instanceMongodb