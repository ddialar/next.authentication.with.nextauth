import type { NextApiRequest, NextApiResponse } from 'next'
import { StatusCodes } from 'http-status-codes'
import { todoControllers } from '@controllers'
import type { Todo } from '@types'

const { OK } = StatusCodes

// ###########################################################
// #####               READING OPERATIONS                #####
// ###########################################################

export const getAll = async (req: NextApiRequest, res: NextApiResponse<Todo[]>) => {
  const persistedTodos = await todoControllers.getAll()

  return res.status(OK).json(persistedTodos)
}

// ###########################################################
// #####              UPDATING OPERATIONS                #####
// ###########################################################

export const markAsDone = async (req: NextApiRequest, res: NextApiResponse<Todo>) => {
  const { id } = req.query
  const updatedTodo = await todoControllers.markAsDone(id as string)

  return res.status(OK).json(updatedTodo)
}
