import { randomUUID } from 'crypto'
import { userRepositories } from '@repositories'
import { GetUserByUsernameBadRequestError, SaveNewUserBadRequestError } from '@errors'
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

// ###########################################################
// #####               WRITING OPERATIONS                #####
// ###########################################################

export const saveNewUser = async (newUserData: BasicUserData): Promise<User | null> => {
  try {
    const newUser: User = {
      ...newUserData,
      id: randomUUID(),
      isEnabled: true
    }
    return await userRepositories.saveNewUser(newUser)
  } catch (error) {
    console.log('[ERROR] - Saving new user', (<Error>error).message)
    throw new SaveNewUserBadRequestError()
  }
}
