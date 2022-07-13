import type { NextApiRequest, NextApiResponse } from 'next'
import { todoHandlers } from '@handlers'
import { handleHttpError, ensureAuthenticated } from '@middlewares'
import { MethodNotAllowedError } from '@errors'
import type { Role, Todo } from '@types'

interface ActionElements {
  handler: (req: NextApiRequest, res: NextApiResponse) => Promise<unknown>
  roles: Role[]
}

type Actions = Record<string, ActionElements>

const actions: Actions = {
  PATCH: {
    handler: todoHandlers.markAsDone,
    roles: ['admin']
  }
}

export default handleHttpError<Todo>(async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req
  if (method && method in actions) {
    const { handler, roles } = actions[method as keyof typeof actions]
    await ensureAuthenticated(req, roles)
    return await handler(req, res)
  }
  throw new MethodNotAllowedError()
})
