import { dbConnect } from '../core'
// import type { UserMongo } from '../models'
import type { Todo } from '@types'

// ###########################################################
// #####               READING OPERATIONS                #####
// ###########################################################

export const getAll = async (): Promise<Todo[]> =>
  (await dbConnect()).models.Todo.find().exec()

// ###########################################################
// #####               WRITING OPERATIONS                #####
// ###########################################################

export const markAsDone = async (id: string) =>
  (await dbConnect()).models.Todo.findByIdAndUpdate(id, { status: 'done' }, { new: true })
