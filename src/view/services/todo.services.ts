import type { Todo } from '@types'

const BASE_PATH = '/api/todos'

// ###########################################################
// #####                READING OPERATIONS               #####
// ###########################################################

export const getAll = async (): Promise<Todo[]> => {
  const result = await fetch(
    `${BASE_PATH}`,
    {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json;charset=utf-8'
      }
    }
  )

  return result.ok
    ? result.json()
    : []
}
