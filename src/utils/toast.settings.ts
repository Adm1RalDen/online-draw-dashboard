import { ToastOptions } from 'react-toastify'

export const toastSettings: Pick<ToastOptions, 'autoClose' | 'hideProgressBar'> = {
  hideProgressBar: false,
  autoClose: 5000
}
