import { randomUUID } from 'crypto'
import { mapFromUserToOrm } from '@mappers'
import type { User } from '@types'

describe('Mappers - mapFromUserToOrm', () => {
  it('maps perfectly the provided user data structure', () => {
    const commonUserData = {
      name: 'Jane Doe',
      username: 'jane@doe.com',
      locale: 'es-ES',
      picture: 'Picture URL',
      isEnabled: true
    }
    const user: User = {
      id: randomUUID(),
      ...commonUserData
    }
    const expectedResult = {
      _id: user.id,
      ...commonUserData
    }
    const result = mapFromUserToOrm(user)

    expect(result).toStrictEqual(expectedResult)
  })
})
