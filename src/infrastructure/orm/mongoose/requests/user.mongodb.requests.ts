import { dbConnect } from '../core'
import type { UserMongo } from '../models'
import type { User } from '@types'

// ###########################################################
// #####               READING OPERATIONS                #####
// ###########################################################

export const getByUsername = async (username: string): Promise<User | null> =>
  (await dbConnect()).models.User.findOne({ username }).exec()

// ###########################################################
// #####               WRITING OPERATIONS                #####
// ###########################################################

export const saveNewUser = async (newUserData: UserMongo) =>
  (await dbConnect()).models.User.create(newUserData)
