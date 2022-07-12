import { StatusCodes } from 'http-status-codes'
import { ApiError } from 'next/dist/server/api-utils'

const { UNAUTHORIZED } = StatusCodes
const message = 'User not authorized'

export class UserUnauthorizedError extends ApiError {
  constructor () {
    super(UNAUTHORIZED, message)
  }
}
