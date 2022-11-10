import { SerializedError } from '@reduxjs/toolkit'
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query'

import { ErrorMessages } from 'const/enums'

import { ServerResponseError } from 'types'

type Parameters = FetchBaseQueryError | SerializedError | undefined

export const getRtkRequestError = (err: Parameters) => {
  if (err) {
    return (err as ServerResponseError)?.data?.message || ErrorMessages.OCCURED_ERROR
  }

  return ErrorMessages.OCCURED_ERROR
}
