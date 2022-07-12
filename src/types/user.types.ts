export interface BasicUserData {
  name: string
  /* The username content matches with the user's email address */
  username: string
  locale: string
  picture?: string | null
}

export interface User extends BasicUserData {
  id: string
  isEnabled: boolean
}
