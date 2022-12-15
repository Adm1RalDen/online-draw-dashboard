import { SerializedError } from '@reduxjs/toolkit'
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query'
import { is, object, string } from 'superstruct'

import { ErrorMessages } from 'const/enums'

import { ServerResponseError } from 'types'

type Parameters = FetchBaseQueryError | SerializedError | ServerResponseError | undefined

const serverError = object({
  data: object({
    message: string()
  })
})

export const getRtkRequestError = (err: Parameters) => {
  if (is(err, serverError)) {
    return err.data.message || ErrorMessages.OCCURED_ERROR
  }

  return ErrorMessages.OCCURED_ERROR
}
