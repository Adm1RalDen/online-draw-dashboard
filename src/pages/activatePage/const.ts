import { activationAccauntApi } from 'api/user/activate-accaunt'
import { checkActivationLinkApi } from 'api/user/checkActivationLink'
import { AxiosError } from 'axios'
import { toast } from 'react-toastify'

export const ACTIVATION_PAGE_TITLE = 'Activate your account'
export const ACTIVATION_PAGE_HEADING_TITLE =
  'To confirm your registration on the Draw Online website, click the confirmation button'
export const ACTIVATION_PAGE_BUTTON_TEXT = 'Activate'
export const ACTIVATION_PAGE_IS_ACTIVATED_TEXT = 'Your accaunt is activated'

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
    window.location.replace('/')
  }
}

export const activationAccaunt = async (data: Props) => {
  const { link, setIsLoading, setIsSuccess } = data
  setIsLoading(true)
  try {
    const response = await activationAccauntApi(link)
    if (response.status === 200) {
      setIsSuccess(true)
      toast.success('Success', { autoClose: 3000 })
      setTimeout(() => {
        window.location.replace('/')
      }, 3000)
    }
  } catch (e) {
    if (e instanceof AxiosError) {
      toast.error(e.response?.data.message)
    }
    window.location.replace('/')
  }
  setIsLoading(false)
}
