import { SerializedError } from '@reduxjs/toolkit'
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query'
import { ErrorMessages } from 'const/enums'
import { toast } from 'react-toastify'
import { ServerResponseError } from 'types'

export const toastRtkRequestError = (err: FetchBaseQueryError | SerializedError | undefined) => {
  if (err) {
    toast.error((err as ServerResponseError).data.message || ErrorMessages.OCCURED_ERROR)
    return err
  } else {
    toast.error(ErrorMessages.OCCURED_ERROR)
    return ErrorMessages.OCCURED_ERROR
  }
}
