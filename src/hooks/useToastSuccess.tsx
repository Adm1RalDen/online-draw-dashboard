import { useEffect } from 'react'
import { toast } from 'react-toastify'

export const useToastSuccess = (isSuccess: unknown, message = 'Success') => {
  useEffect(() => {
    if (isSuccess) {
      toast.success(message)
    }
  }, [isSuccess, message])
}
