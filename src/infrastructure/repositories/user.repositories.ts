import { mongooseOrm } from '@orm'
import { mapFromOrmToUser, mapFromUserToOrm } from '@mappers'
import type { User } from '@types'

// ###########################################################
// #####               READING OPERATIONS                #####
// ###########################################################

export const getByUsername = async (username: string): Promise<User | null> =>
  mapFromOrmToUser(await mongooseOrm.users.getByUsername(username))

// ###########################################################
// #####               WRITING OPERATIONS                #####
// ###########################################################

export const saveNewUser = async (newUserData: User): Promise<User | null> =>
  mongooseOrm.users.saveNewUser(mapFromUserToOrm(newUserData)).then(user => user)
