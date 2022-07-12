import { mapFromOrmToUser } from '@mappers'
import type { User } from '@types'
import { randomUUID } from 'crypto'

describe('Mappers - mapFromOrmToUser', () => {
  it('returns null when an empty raw user is provided', () => {
    const rawUser = {}
    const result = mapFromOrmToUser(rawUser)

    expect(result).toBeNull()
  })

  it('returns null when the ID is not present in the provided raw user data', () => {
    const rawUser = {
      username: 'jane@doe.com'
    }
    const result = mapFromOrmToUser(rawUser)

    expect(result).toBeNull()
  })

  it('returns null when the username is not present in the provided raw user data', () => {
    const rawUser = {
      id: randomUUID()
    }
    const result = mapFromOrmToUser(rawUser)

    expect(result).toBeNull()
  })

  it('maps to default user structure when only the ID and username are provided as raw user data', () => {
    const rawUser = {
      id: randomUUID(),
      username: 'jane@doe.com'
    }
    const expectedResult: User = {
      ...rawUser,
      name: 'not defined',
      locale: 'en-GB',
      picture: null,
      isEnabled: false
    }
    const result = mapFromOrmToUser(rawUser)

    expect(result).toStrictEqual(expectedResult)
  })

  it('maps perfectly the provided raw user data structure', () => {
    const rawUser = {
      id: randomUUID(),
      name: 'Jane Doe',
      username: 'jane@doe.com',
      locale: 'es-ES',
      picture: 'Picture URL',
      isEnabled: true
    }
    const expectedResult: User = { ...rawUser }
    const result = mapFromOrmToUser(rawUser)

    expect(result).toStrictEqual(expectedResult)
  })
})
