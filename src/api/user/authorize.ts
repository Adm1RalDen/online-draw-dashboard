import { Instance } from 'api/instance'
import { SuccessAuthResponse, User2FALoginResponse, UserLoginFormData } from 'types'

export const authorizeUser = async (data: UserLoginFormData) => {
  return Instance.post<SuccessAuthResponse | User2FALoginResponse>('/user/login', {
    ...data
  })
}
