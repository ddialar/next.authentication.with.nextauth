import { StatusCodes, ReasonPhrases } from 'http-status-codes'
import { ApiError } from 'next/dist/server/api-utils'

export class MethodNotAllowedError extends ApiError {
  constructor () {
    super(StatusCodes.METHOD_NOT_ALLOWED, ReasonPhrases.METHOD_NOT_ALLOWED)
  }
}
