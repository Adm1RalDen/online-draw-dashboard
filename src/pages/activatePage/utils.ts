import { AxiosError } from 'axios'
import { toast } from 'react-toastify'

import { activationAccountApi } from 'api/user/activate-account'

import { ErrorMessages } from 'const/enums'

import { redirectHome } from 'utils/redirectHome'

import { ACTIVATION_PAGE_SUCCESS_MESSAGE } from './const'
import { ActivationAccountProps } from './types'

export const activationAccount = async (data: ActivationAccountProps) => {
  const { link, setIsLoading, setError } = data

  try {
    await activationAccountApi(link)
    toast.success(ACTIVATION_PAGE_SUCCESS_MESSAGE, { autoClose: 3000 })
    redirectHome()
  } catch (e) {
    if (e instanceof AxiosError) {
      setError(e.response?.data?.message || ErrorMessages.OCCURED_ERROR)
    } else {
      setError(ErrorMessages.OCCURED_ERROR)
    }
  }
  setIsLoading(false)
}
