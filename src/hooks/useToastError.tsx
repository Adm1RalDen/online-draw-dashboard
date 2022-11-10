import { useEffect } from 'react'
import { toast } from 'react-toastify'

import { ErrorMessages } from 'const/enums'

export const useToastError = (isError: unknown, message: string = ErrorMessages.OCCURED_ERROR) => {
  useEffect(() => {
    if (isError) {
      toast.error(message)
    }
  }, [isError, message])
}
