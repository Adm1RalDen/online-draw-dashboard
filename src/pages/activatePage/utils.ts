import { activationAccountApi } from 'api/user/activate-account'
import { AxiosError } from 'axios'
import { HOME_URL } from 'const/urls'
import { toast } from 'react-toastify'

import { ACTIVATION_PAGE_SUCCESS_MESSAGE } from './const'
import { ActivationAccountProps } from './types'

export const activationAccount = async (data: ActivationAccountProps) => {
  const { link, setIsLoading, setError } = data
  try {
    await activationAccountApi(link)
    toast.success(ACTIVATION_PAGE_SUCCESS_MESSAGE, { autoClose: 3000 })
    setTimeout(() => {
      window.location.replace(HOME_URL)
    }, 3000)
  } catch (e) {
    if (e instanceof AxiosError) {
      setError(e.response?.data?.message || 'Occured error')
    } else {
      setError('Occured error')
    }
  }
  setIsLoading(false)
}
