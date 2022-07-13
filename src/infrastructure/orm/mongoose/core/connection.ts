import mongoose from 'mongoose'
import Bluebird from 'bluebird'
import { TodoSchema, UserSchema } from '../models'
import { MONGO_URI } from '@config'

mongoose.Promise = Bluebird

const options: mongoose.ConnectOptions = {
  maxPoolSize: 100,
  minPoolSize: 10
}

let cached = global.mongoose

if (!cached) {
  cached = global.mongoose = { connection: null }
}

export const dbConnect = async () => {
  if (cached.connection) {
    return cached.connection
  }

  if (mongoose.connections.length) {
    try {
      await mongoose.disconnect()
    } catch (error) {
      console.error('Error disconnecting Mongoose', error)
    }
  }

  cached.connection = mongoose.createConnection(MONGO_URI, options)
  cached.connection.model('User', UserSchema)
  cached.connection.model('Todo', TodoSchema)
  return cached.connection
}
