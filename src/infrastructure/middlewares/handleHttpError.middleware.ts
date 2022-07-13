import type { NextApiHandler, NextApiRequest, NextApiResponse } from 'next'
import { ApiError, sendError } from 'next/dist/server/api-utils'

export const handleHttpError = <T>(handler: NextApiHandler<T>) =>
  async (req: NextApiRequest, res: NextApiResponse<T>) => {
    try {
      return await handler(req, res)
    } catch (error) {
      const { statusCode, message } = <ApiError>error
      sendError(res, statusCode, message)
    }
  }
