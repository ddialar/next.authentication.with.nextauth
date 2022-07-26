import type { NextApiRequest, NextApiResponse } from 'next'
import { todoHandlers } from '@handlers'
import { ensureAuthenticated } from '@middlewares'
import { MethodNotAllowedError } from '@errors'
import type { Role } from '@types'
interface ActionElements {
  handler: (req: NextApiRequest, res: NextApiResponse) => Promise<unknown>
  roles: Role[]
}

type Actions = Record<string, ActionElements>

const actions: Actions = {
  GET: {
    handler: todoHandlers.getAll,
    roles: ['user', 'manager', 'admin']
  }
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req
  if (method && method in actions) {
    const { handler, roles } = actions[method as keyof typeof actions]
    await ensureAuthenticated(req, roles)
    return await handler(req, res)
  }
  throw new MethodNotAllowedError()
}
