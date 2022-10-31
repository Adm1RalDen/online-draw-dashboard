import { AxiosError } from 'axios'
import { toast } from 'react-toastify'

import { ErrorMessages } from 'const/enums'

export const errorHandler = (e: unknown, errorMessage = ErrorMessages.OCCURED_ERROR) => {
  if (e instanceof AxiosError) {
    const message = e.response?.data.message || errorMessage
    toast.error(message)
    return message
  } else {
    toast.error(errorMessage)
    return errorMessage
  }
}
