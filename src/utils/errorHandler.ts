import { AxiosError } from 'axios'
import { toast } from 'react-toastify'

export const errorHandler = (e: unknown) => {
  if (e instanceof AxiosError) {
    toast.error(e.response?.data.message || 'Occured error')
  } else {
    toast.error('Occured error')
  }
}
