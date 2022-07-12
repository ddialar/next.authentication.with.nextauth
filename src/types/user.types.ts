import type { Role } from '@types'
export interface BasicUserData {
  name: string
  /* The username content matches with the user's email address */
  username: string
  locale: string
  picture?: string | null
}

export interface User extends BasicUserData {
  id: string
  role: Role
  isEnabled: boolean
}
