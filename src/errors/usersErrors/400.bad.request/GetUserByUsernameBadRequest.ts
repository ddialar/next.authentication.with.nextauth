import { StatusCodes } from 'http-status-codes'
import { ApiError } from 'next/dist/server/api-utils'

const { BAD_REQUEST } = StatusCodes
const message = 'Error retrieving user by username'

export class GetUserByUsernameBadRequestError extends ApiError {
  constructor () {
    super(BAD_REQUEST, message)
  }
}
