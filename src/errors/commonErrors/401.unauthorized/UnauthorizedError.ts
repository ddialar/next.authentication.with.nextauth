import { StatusCodes, ReasonPhrases } from 'http-status-codes'
import { ApiError } from 'next/dist/server/api-utils'

export class UnauthorizedError extends ApiError {
  constructor () {
    super(StatusCodes.UNAUTHORIZED, ReasonPhrases.UNAUTHORIZED)
  }
}
