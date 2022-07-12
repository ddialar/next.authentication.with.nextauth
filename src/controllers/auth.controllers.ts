import { userControllers } from '@controllers'
import { UserUnauthorizedError } from '@errors'
import type { BasicUserData } from '@types'

export const processSignInOperation = async ({ name, username, picture, locale }: BasicUserData): Promise<boolean> => {
  try {
    console.log('[INFO ] - Starting signin process...')
    const persistedUser = await userControllers.getByUsername(username)

    if (!persistedUser) {
      console.log('[TRACE] - User does not exist')
      await userControllers.saveNewUser({ name, username, picture, locale })
      console.log('[TRACE] - User persisted successfully')
      console.log('[INFO ] - User authorized')
      return true
    }

    console.log('[TRACE] - User already exists')
    if (persistedUser.isEnabled) {
      console.log('[INFO ] - User authorized')
      return true
    } else {
      throw new UserUnauthorizedError()
    }
  } catch (error) {
    console.log('[ERROR] - Processing SignIn', (<Error>error).message)
    return false
  }
}
