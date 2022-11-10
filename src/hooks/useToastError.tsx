import { useEffect } from 'react'
import { toast } from 'react-toastify'

export const useToastError = (isError: unknown, message: string) => {
  useEffect(() => {
    if (isError) {
      toast.error(message)
    }
  }, [isError, message])
}
