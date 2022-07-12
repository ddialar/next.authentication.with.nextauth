import { DefaultSession } from 'next-auth'
import { Role } from '@types'

// NOTE With the default ESLint config, Session and JWT are highlighted as error by non used variables.
// In order to fix this issue, it's needed to edit the '.eslintrc.json' file and include these rules:
// "no-unused-vars": 0,
// "@typescript-eslint/no-unused-vars": [
//   "error",
//   {
//     "args": "none"
//   }
// ]

declare module 'next-auth' {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: DefaultSession['user'] & {
      role: Role
      locale: string
    }
  }
}

declare module 'next-auth/jwt' {
  /**
   * Returned by the `jwt` callback and `getToken`, when using JWT sessions
   */
  interface JWT {
    role: Role
    locale: string
  }
}
