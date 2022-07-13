import type { NextApiRequest, NextApiResponse } from 'next'
// import { ensureAuthenticated } from '@middlewares'
import { todoHandlers } from '@handlers'
import { MethodNotAllowedError } from '@errors'

const actions = {
  GET: {
    handler: todoHandlers.getAll,
    roles: ['user', 'manager', 'admin']
  }
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { method } = req
  if (method && method in actions) {
    // const { handler, roles } = actions[method as keyof typeof actions]
    // await ensureAuthenticated(req, permissions)
    const { handler } = actions[method as keyof typeof actions]
    return await handler(req, res)
  }
  throw new MethodNotAllowedError()
}
