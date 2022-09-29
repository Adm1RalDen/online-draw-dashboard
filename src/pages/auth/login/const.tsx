import { authorizeUser } from 'api/user/authorize'
import { AppDispatch } from 'store'
import { setUserIsLoadingAction } from 'store/slices/user.slice'
import { UserLoginThunk } from 'store/thunks/user/authorization.thunk'
import { RefreshResponse, User2FAData, User2FALoginResponse, UserLoginFormData } from 'types'
import { cryptoSha256 } from 'utils/cryptoPassord'
import { errorHandler } from 'utils/errorHandler'
import * as yup from 'yup'

export const validationSchema = yup.object().shape({
  email: yup.string().email('Not valid email').required('Required'),
  password: yup.string().min(6, 'min 6').required('Required')
})

export const initialValues: UserLoginFormData = {
  email: '',
  password: ''
}

export const AuthorizationFileds = ['email', 'password']

type Props = {
  data: UserLoginFormData
  dispatch: AppDispatch
  setUser2FAData: React.Dispatch<React.SetStateAction<User2FAData | null>>
}

export const onSubmit = async (obj: Props) => {
  const { data, dispatch, setUser2FAData } = obj
  dispatch(setUserIsLoadingAction(true))
  try {
    const password = cryptoSha256(data.password)
    const response = await authorizeUser({ ...data, password: password })
    if (!(response.data as User2FALoginResponse)?.isUse2FA) {
      return dispatch(UserLoginThunk({ ...(response.data as RefreshResponse) }))
    }
    setUser2FAData({
      qrcode: (response.data as User2FALoginResponse).qrcode,
      userId: (response.data as User2FALoginResponse).userId
    })
  } catch (e) {
    errorHandler(e)
  }
  dispatch(setUserIsLoadingAction(false))
}
