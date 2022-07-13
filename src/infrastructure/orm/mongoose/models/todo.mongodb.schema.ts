import { Schema } from 'mongoose'
import { MONGO_SCHEMA_OPTIONS } from './schemas.configuration'
import type { Todo } from '@types'

export type TodoMongo = Omit<Todo, 'id'> & { _id: string }

export const TodoSchema = new Schema<TodoMongo>({
  _id: { type: String },
  title: { type: String, required: true },
  description: { type: String, required: true, immutable: true },
  status: { type: String, required: true, enum: ['done', 'pending'] }
}, MONGO_SCHEMA_OPTIONS)
