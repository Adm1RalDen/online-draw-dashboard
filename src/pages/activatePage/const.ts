import { activationAccauntApi } from 'api/user/activate-accaunt'
import { checkActivationLinkApi } from 'api/user/checkActivationLink'
import { HOME_URL } from 'const/urls'
import { toast } from 'react-toastify'

export const ACTIVATION_PAGE_TITLE = 'Activate your account'
export const ACTIVATION_PAGE_HEADING_TITLE =
  'To confirm your registration on the Draw Online website, click the confirmation button'
export const ACTIVATION_PAGE_BUTTON_TEXT = 'Activate'
export const ACTIVATION_PAGE_IS_ACTIVATED_TEXT = 'Your account is activated'
const SUCCESS_MESSAGE = 'Success'

type Props = {
  link: string
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
  setIsSuccess: React.Dispatch<React.SetStateAction<boolean>>
}
type checkProps = Omit<Props, 'setIsLoading' | 'setIsSuccess'> & {
  setIsShow: React.Dispatch<React.SetStateAction<boolean>>
}

export const checkActivationLink = async (data: checkProps) => {
  const { link, setIsShow } = data
  try {
    await checkActivationLinkApi(link)
    setIsShow(true)
  } catch (e) {
    window.location.replace(HOME_URL)
  }
}

export const activationAccaunt = async (data: Props) => {
  const { link, setIsLoading, setIsSuccess } = data
  setIsLoading(true)
  try {
    const response = await activationAccauntApi(link)
    if (response.status === 200) {
      setIsSuccess(true)
      toast.success(SUCCESS_MESSAGE, { autoClose: 3000 })
      setTimeout(() => {
        window.location.replace(HOME_URL)
      }, 3000)
    }
  } catch (e) {
    window.location.replace(HOME_URL)
  }
  setIsLoading(false)
}
