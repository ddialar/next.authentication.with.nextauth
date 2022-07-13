import { DEFAULT_TODO_STATUS } from '@config'
import type { Todo } from '@types'

export const mapFromOrmToTodo = (rawTodo: any): Todo | null => {
  return !rawTodo?.id
    ? null
    : {
      id: rawTodo.id,
      title: rawTodo.title || 'not defined',
      description: rawTodo.description || 'not defined',
      status: rawTodo.status || DEFAULT_TODO_STATUS
    }
}
