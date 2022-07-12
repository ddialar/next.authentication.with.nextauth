import { DEFAULT_USER_LOCALE, DEFAULT_USER_PICTURE_URL } from '@config'
import type { User } from '@types'
import type { UserMongo } from '@ormMongoose'

export const mapFromOrmToUser = (rawUser: any): User | null => {
  return !rawUser?.id || !rawUser?.username
    ? null
    : {
      id: rawUser.id,
      name: rawUser.name || 'not defined',
      username: rawUser.username,
      role: rawUser.role || 'user',
      locale: rawUser.locale || DEFAULT_USER_LOCALE,
      picture: rawUser.picture || DEFAULT_USER_PICTURE_URL,
      isEnabled: Boolean(rawUser.isEnabled)
    }
}

export const mapFromUserToOrm = ({ id, picture, locale, ...restOfData }: User): UserMongo => ({
  _id: id,
  locale: locale || DEFAULT_USER_LOCALE,
  picture: picture || DEFAULT_USER_PICTURE_URL,
  ...restOfData
})
