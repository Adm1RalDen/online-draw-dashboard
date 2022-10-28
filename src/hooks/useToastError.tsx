import { ErrorMessages } from 'const/enums'
import { useEffect } from 'react'
import { toast } from 'react-toastify'

export const useToastError = (isError: unknown) => {
  useEffect(() => {
    if (isError) {
      toast.error(ErrorMessages.OCCURED_ERROR)
    }
  }, [isError])
}
