import { todoRepositories } from '@repositories'
import type { Todo } from '@types'

// ###########################################################
// #####               READING OPERATIONS                #####
// ###########################################################

export const getAll = async (): Promise<Todo[]> =>
  todoRepositories.getAll()

// ###########################################################
// #####              UPDATING OPERATIONS                #####
// ###########################################################

export const markAsDone = async (id: string): Promise<Todo> =>
  todoRepositories.markAsDone(id)
