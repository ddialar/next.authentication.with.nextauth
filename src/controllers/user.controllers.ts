import { randomUUID } from 'crypto'
import { userRepositories } from '@repositories'
import { GetUserByUsernameBadRequestError, SaveNewUserBadRequestError, UserNotFoundError } from '@errors'
import type { BasicUserData, User } from '@types'

// ###########################################################
// #####               READING OPERATIONS                #####
// ###########################################################

export const getByUsername = async (username: string): Promise<User | null> => {
  try {
    return userRepositories.getByUsername(username)
  } catch (error) {
    console.log('[ERROR] - Retrieving user by username', (<Error>error).message)
    throw new GetUserByUsernameBadRequestError()
  }
}

export const getDataForToken = async (username: string): Promise<Pick<User, 'role' | 'locale'>> => {
  try {
    console.log('[INFO ] - Starting signin process...')
    const persistedUser = await getByUsername(username)

    if (persistedUser) {
      const { role, locale } = persistedUser
      return { role, locale }
    } else {
      throw new UserNotFoundError()
    }
  } catch (error) {
    console.log('[ERROR] - Getting user role', (<Error>error).message)
    throw error
  }
}

// ###########################################################
// #####              UPDATING OPERATIONS                #####
// ###########################################################

export const saveNewUser = async (newUserData: BasicUserData): Promise<User | null> => {
  try {
    const newUser: User = {
      ...newUserData,
      id: randomUUID(),
      role: 'user',
      isEnabled: true
    }
    return await userRepositories.saveNewUser(newUser)
  } catch (error) {
    console.log('[ERROR] - Saving new user', (<Error>error).message)
    throw new SaveNewUserBadRequestError()
  }
}
