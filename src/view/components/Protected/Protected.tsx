import type { FC, ReactElement } from 'react'
import { useSession } from 'next-auth/react'
import type { Role } from '@types'

interface Props {
  roles: Role[]
  children: ReactElement
}

export const Protected: FC<Props> = ({ roles, children }) => {
  const { data: session } = useSession()

  const authorized = roles.some((requiredRole) => session?.user.role === requiredRole)

  return authorized ? children : null
}
