import { mongooseOrm } from '@orm'
import { mapFromOrmToTodo } from '@mappers'
import type { Todo } from '@types'

// ###########################################################
// #####               READING OPERATIONS                #####
// ###########################################################

export const getAll = async (): Promise<Todo[]> => {
  const persistedTodos = await mongooseOrm.todos.getAll()
  return persistedTodos.reduce<Todo[]>((previous, todo) => {
    const mappedTodo = mapFromOrmToTodo(todo)
    return mappedTodo ? [...previous, mappedTodo] : [...previous]
  }, [])
}
// ###########################################################
// #####               WRITING OPERATIONS                #####
// ###########################################################

// export const saveNewUser = async (newUserData: User): Promise<User | null> =>
//   mongooseOrm.users.saveNewUser(mapFromUserToOrm(newUserData)).then(user => user)
