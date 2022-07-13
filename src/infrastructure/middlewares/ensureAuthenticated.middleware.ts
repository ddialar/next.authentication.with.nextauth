import type { NextApiRequest } from 'next'
import { getSession } from 'next-auth/react'
import { UnauthorizedError } from '@errors'
import type { Role } from '@types'

export const ensureAuthenticated = async (req: NextApiRequest, roles: Role[]) => {
  const session = await getSession({ req })
  if (!session) {
    throw new UnauthorizedError()
  }

  const authorized = roles.some((requiredRole) => session.user.role === requiredRole)
  if (!authorized) {
    throw new UnauthorizedError()
  }
}
