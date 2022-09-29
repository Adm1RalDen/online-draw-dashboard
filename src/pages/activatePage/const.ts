import { activationAccountApi } from 'api/user/activate-account'
import { AxiosError } from 'axios'
import { HOME_URL } from 'const/urls'
import { toast } from 'react-toastify'

export const ACTIVATION_PAGE_IS_ACTIVATED_TEXT = 'Your account is activated'
const SUCCESS_MESSAGE = 'Success'

type Props = {
  link: string
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
  setError: React.Dispatch<React.SetStateAction<string>>
}

export const activationAccount = async (data: Props) => {
  const { link, setIsLoading, setError } = data
  try {
    await activationAccountApi(link)
    toast.success(SUCCESS_MESSAGE, { autoClose: 3000 })
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
