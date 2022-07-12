import { StatusCodes } from 'http-status-codes'
import { ApiError } from 'next/dist/server/api-utils'

const { NOT_FOUND } = StatusCodes
const message = 'User not found'

export class UserNotFoundError extends ApiError {
  constructor () {
    super(NOT_FOUND, message)
  }
}
