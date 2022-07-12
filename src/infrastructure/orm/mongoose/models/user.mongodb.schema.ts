import { Schema } from 'mongoose'
import { MONGO_SCHEMA_OPTIONS } from './schemas.configuration'
import type { User } from '@types'

export type UserMongo = Omit<User, 'id'> & { _id: string }

export const UserSchema = new Schema<UserMongo>({
  _id: { type: String },
  name: { type: String, required: true },
  username: { type: String, required: true, immutable: true },
  role: { type: String, required: true, enum: ['user', 'manager', 'admin'] },
  locale: { type: String, required: true },
  picture: { type: String },
  isEnabled: { type: Boolean, default: true }
}, MONGO_SCHEMA_OPTIONS)
