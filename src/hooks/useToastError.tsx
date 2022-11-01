import { useEffect } from 'react'
import { toast } from 'react-toastify'

import { ErrorMessages } from 'const/enums'

export const useToastError = (isError: unknown) => {
  useEffect(() => {
    if (isError) {
      toast.error(ErrorMessages.OCCURED_ERROR)
    }
  }, [isError])
}
