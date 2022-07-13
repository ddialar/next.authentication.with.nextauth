import { todoRepositories } from '@repositories'
import type { Todo } from '@types'

export const getAll = async (): Promise<Todo[]> =>
  todoRepositories.getAll()
